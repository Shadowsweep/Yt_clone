import React from 'react'
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";

const ContactForm = () => {
 
   function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_ju86z3k','template_jqg5h47',e.target,'oG0Mj2OJ_GmTgTOyi').then(res=>{ console.log(res) }).catch(err=>console.log(err))
    Swal.fire({
            
        icon: 'success',
        title: 'Message send',
        showConfirmButton: false,
        timer: 1500,
        // toast:true
      })
   }
 
 
 
    return (
    <div className='container '
      style={{color:'#FFF' , marginTop:"50px",width:'98%', height:'84vh',outline: '0', 
    //  ,backgroundImage: `url('https://i.pinimg.com/736x/a2/47/8a/a2478aafa988041377a82e87381d0715.jpg')`
    // , backgroundPosition:'center',
    //   backgroundDesign:'cover'
    }}
    onSubmit={sendEmail}
      >
        <h1> Contact Form </h1>
        <form className='row' style={{ margin:'25px 70px 75px 100px'}} >
         <label>Name</label>
         <input type='text'
           name='from_name' className='form-control'
         />

        {/* <label>Email</label>
         <input type='email'
           name='user_email' className='form-control'
         /> */}


         <label>Message</label>
         <textarea name='message' rows='4' className='form-control' placeholder='Your email: user@example.com
Purpose: ' />

         <input type='submit'
           value='Send'
           className='form-control btn btn-primary'
           style={{backgroundColor:'#30e14e' ,marginTop:'30px'}}
         />
           

        </form>
        
    
    
    </div>
  )
}

export default ContactForm