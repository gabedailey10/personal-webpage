import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='container'>
      <form className='form'>
        <input type="email" placeholder='Email' className='email'/>
        <textarea>Message...</textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
