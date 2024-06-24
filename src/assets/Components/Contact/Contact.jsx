import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { Auth } from '../Context/AuthenticationContext';

const Contact = () => {
 const{notify,user}= useContext(Auth)
  const handleContact=(e)=>{
    e.preventDefault();
    const formData={
      userName:e.target.userName.value,
      email : e.target.email.value,
      message : e.target.message.value
    }
    emailjs.send(
      'service_lyb6m2i', // Replace with your EmailJS service ID
      'template_ezst4ep', // Replace with your EmailJS template ID
    formData,
      '0BYUHsyAxt4ka-fjC' // Replace with your EmailJS user ID
    ).then((response) => {
      notify('Message sent successfully!');
      e.target.reset()
    }).catch((error) => {
      notify('Error sending message.');
    });
  };

    // console.log(`userName:${userName},email:${email},message:${message}`)

  return (
    <div>
      <div className="flex justify-center m-4">
        <form action="POST" className="w-3/4 md:w-1/2 shadow-lg" onSubmit={handleContact}>
        <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder={user.displayName}  name="userName" required/>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow " placeholder={user.email} name="email" required />
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="write your message"
            name="message"
            required
          ></textarea>
          <br />
          <input
            type="submit"
            className="btn btn-outline btn-secondary items-center w-full"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
