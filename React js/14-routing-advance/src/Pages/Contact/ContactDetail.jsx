import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetail = () => {
    const params= useParams()
  return (
    <div>
        <h1>Contact Details of {params.contactId}</h1>
    </div>
  )
}

export default ContactDetail
