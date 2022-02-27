import React from 'react'

export default function Skills(props) {
    return (
        <div id='skill'>
            
                <div className='skill '>
                    <img src={`${props.src}`} alt="" className='skillimage' />
                    <p className='my-3'>{props.name}</p>
               
            </div>


        </div>
    )
}
