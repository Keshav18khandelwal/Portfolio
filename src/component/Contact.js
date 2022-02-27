import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
export default function Contact() {

    const SERVICE_ID = "service_j0cv4fh"
    const USER_ID = "VJNi7ZU3jwyEc5Ai-";
    const TEMPLATE_ID = "template_3doynfj";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value && e.target.email.value && e.target.message.value){
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
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
           
                <div class="mb-3">
                    {/* <label htmlFor="email" class="form-label">Email address</label> */}
                    <input type="email" placeholder='Email address' class="form-control" id="email" aria-describedby="emailHelp" name="email" minLength={5}/>

                </div>
                <div class="mb-3">
                    {/* <label htmlFor="name" class="form-label">Name</label> */}
                    <input type="text" placeholder='Name' class="form-control" id="name" name="name" minLength={3}/>
                </div>
                <div class="mb-3">
                    {/* <label htmlFor="message" class="form-label">Message</label> */}
                    <textarea type="text" placeholder='Message' class="form-control" id="message" name="message" minLength={10}/>
                </div>

                <button type="submit" class="btn btn-primary cbtn" >Send</button>
               
            </form>
           </div>
        </div>
    )
}
