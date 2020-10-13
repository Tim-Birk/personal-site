// Gatsby settings for the environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

const successCode = 200
const errorCode = 400

// Connect to Mailgun API
const mailgun = require("mailgun-js")
const mg = mailgun({
  apiKey: process.env.GATSBY_MAILGUN_API_KEY,
  domain: process.env.GATSBY_MAILGUN_DOMAIN,
})

// Netlify function
export function handler(event, context, callback) {
  let data = JSON.parse(event.body)
  let { name, email, message } = data
  let mailOptions = {
    from: `$no-reply-timbirkmire <tim@hey.com>`,
    to: process.env.GATSBY_MY_EMAIL_ADDRESS,
    subject: `Portfolio Site Contact Submission`,
    replyTo: email,
    text: `${message}`,
  }

  // MailGun code
  mg.messages().send(mailOptions, function (error, body) {
    if (error) {
      callback(null, {
        statusCode: errorCode,
        headers,
        body: JSON.stringify(error),
      })
    } else {
      callback(null, {
        statusCode: successCode,
        headers,
        body: JSON.stringify(body),
      })
    }
  })
}
