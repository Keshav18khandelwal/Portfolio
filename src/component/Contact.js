import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

export default function Contact() {

 const   serviceId = "service_j0cv4fh";
 const userId = "VJNi7ZU3jwyEc5Ai-";
 const templateId= "template_3doynfj";

    const handleOnSubmit = (e) => {
       
        e.preventDefault();
        if(e.target.name.value && e.target.email.value && e.target.message.value){
            emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
                  })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text
                  })
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Ooops, something went wrong",
                
              })
        }
        
        e.target.reset()
    };

    return (
        <div className=' my-5 cform' id='contact'>
            <h2>Contact</h2>
            <div className='form'>
            <form onSubmit={handleOnSubmit}>
           
                <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">Email address</label> */}
                    <input type="email" placeholder='Email address' className="form-control" id="email" aria-describedby="emailHelp" name="email" minLength={5}/>

                </div>
                <div className="mb-3">
                    {/* <label htmlFor="name" className="form-label">Name</label> */}
                    <input type="text" placeholder='Name' className="form-control" id="name" name="name" minLength={3}/>
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="message" className="form-label">Message</label> */}
                    <textarea type="text" placeholder='Message' className="form-control" id="message" name="message" minLength={10}/>
                </div>

                <button type="submit" className="btn btn-primary cbtn" >Submit</button>
               
            </form>
           </div>
        </div>
    )
}
