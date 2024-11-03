import React from 'react'
import '../../App.css'

const Button = ({text1, text2}) => {
  return (
    <div>
        <button className='button whitespace-nowrap'><span class="text">{text1}</span><span>{text2}</span></button>
    </div>
  )
}

export default Button