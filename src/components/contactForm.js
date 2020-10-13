import React from "react"
import { Formik } from "formik"
import styled from "styled-components"
import { navigate } from "gatsby"

import myAvatar from "../images/myAvatar2.svg"
const endpoints = { contact: "/.netlify/functions/sendEmail" }
const axios = require("axios")

const SectionContainer = styled.div`
  ${({ theme }) => `
    border-top: 1px solid #E6ECF8;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.device.tablet} {     
        margin-top: 2em;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const StyledAvatar = styled.img`
  ${({ theme }) => ` 
    width: 75px;
    margin-top: -3em;
    @media ${theme.device.tablet} { 
      width: 95px;
      margin-top: -3.25em;
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => `
    line-height: 1.125;
    font-size: 1.85rem;
    font-weight: 300;
    max-width: 965px;
    margin: 1em 1.5em 1.25em;
    @media ${theme.device.tablet} {     
        font-size: 2.85rem;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const StyledForm = styled.form`
  ${({ theme }) => `
    width: 75%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const FormRow = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${theme.device.tablet} {     
       flex-direction: row; 
       justify-content: space-between;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const FormItem = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const FormLabelContainer = styled.div`
  ${({ theme }) => `
    margin-bottom: 0.5em;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const FormLabel = styled.label`
  ${({ theme }) => `
    font-size: 1.2rem;
    color: rgba(41, 51, 71, 0.85);
    margin-bottom: 0.5em;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const FormInput = styled.input`
  ${({ theme }) => `
    padding: 0.5rem;
    margin-left: 0.25rem;
    margin-bottom: 0.25em;
    font-size: 1.4rem;
    
    &:focus {
      outline: none;
      border: 1px solid #021335;
      border-radius: 3px;
      background-color: #f0f5ff;
    }
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const FormTextarea = styled.textarea`
  ${({ theme }) => `
    padding: 0.5rem;
    margin-left: 0.25rem;
    margin-bottom: 0.25em;
    font-size: 1.4rem;
    font-family: inherit;
    min-height: 145px;
    &:focus {
      outline: none;
      border: 1px solid #021335;
      border-radius: 3px;
      background-color: #f0f5ff;
    }
    @media ${theme.device.tablet} {     
        min-height: 200px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const FormErrorContainer = styled.span`
  ${({ theme }) => `
    margin-left: 0.5rem;
    color: red;
    margin-bottom: 0.25em;
    
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const SubmitButton = styled.button`
  ${({ theme }) => `
    margin: 0 auto 0.25rem;
    background: transparent;
    color: ${theme["brand-color"]};
    padding: 0 1.2rem;
    border-color: ${theme["brand-color"]};
    border-width: 2px;
    border-radius: 290486px;
    outline: none;
    cursor: pointer;
    margin-top: 1rem;
    line-height: 40px;
    font-size: 1.25rem;
    
    &:hover {
      background: ${theme["brand-color"]};
      color: #fff;
      opacity: 90%;
      transition: all 0.35s;
      
    }
   
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const ContactForm = () => {
  const handleSubmit = values => {
    console.log("Success:", values)
    const { name, email, note } = values
    const message = `
        Portfolio Site Contact Submission
  
        From: ${name}
        Email: ${email}
        
        ${note}
      `
    const data = { name: name, email, message }
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        console.log(response)
      } else {
        console.log("Message sent")
        navigate("/")
      }
    })
  }

  //   const onFinishFailed = errorInfo => {
  //     console.log("Failed:", errorInfo)
  //   }

  return (
    <SectionContainer>
      <StyledAvatar src={myAvatar} />
      <SectionTitle>
        Thank you for taking the time to reach out. What can I do for you?
      </SectionTitle>
      <Formik
        initialValues={{ name: "", email: "", note: "" }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = "*required"
          }
          if (!values.email) {
            errors.email = "*required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "invalid email address"
          }
          if (!values.note) {
            errors.note = "*required"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values)
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormRow>
              <FormItem>
                <FormLabelContainer>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormErrorContainer>
                    {errors.name && touched.name && errors.name}
                  </FormErrorContainer>
                </FormLabelContainer>
                <FormInput
                  type="name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  style={{marginRight: "0.5rem"}}
                />
              </FormItem>
              <FormItem>
                <FormLabelContainer>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormErrorContainer>
                    {errors.email && touched.email && errors.email}
                  </FormErrorContainer>
                </FormLabelContainer>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </FormItem>
            </FormRow>

            <FormItem>
              <FormLabelContainer>
                <FormLabel htmlFor="note">Note</FormLabel>
                <FormErrorContainer>
                  {errors.note && touched.note && errors.note}
                </FormErrorContainer>
              </FormLabelContainer>
              <FormTextarea
                type="note"
                name="note"
                id="note"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.note}
              />
            </FormItem>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </SectionContainer>
  )
}

export default ContactForm
