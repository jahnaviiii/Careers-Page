import React from 'react'
import { Form, redirect } from 'react-router-dom'

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method = 'post' action = '/help/contact'>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
    </div>
  )
}

export default Contact

export const contactAction = async({request}) => {
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission);

  return redirect("/acknowledgement")
  
}