import React from 'react'
import "./style.scss"
const Form = () => {
  return (
    <div className='enquire-form'>
<h3>Enquire Now</h3>
<form action="/" className='form'>

<input type="text" placeholder='Enter Name'/>
<input type="email" placeholder='Enter Email' />
<input type="text" placeholder='Enter Number' />
<button className='submit-btn'> Submit</button>
</form>

    </div>
  )
}

export default Form