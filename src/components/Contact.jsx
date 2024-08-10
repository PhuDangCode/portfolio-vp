import React from 'react';
import emailjs from 'emailjs-com';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhone, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

// Function to send email
function sendEmail(name, userEmail, message) {
  emailjs.send(
    'service_rj01efm', // Your EmailJS service ID
    'template_ehljgul', // Your EmailJS template ID
    {
      name: name,
      email: userEmail,
      message: message,
    },
    '6iTmQL2mNbqWieGiK' // Your EmailJS user ID
  ).then(
    response => alert('Message sent successfully!'),
    error => alert('Failed to send email: ' + error.text)
  );
}

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const userEmail = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if (name && userEmail && message) {
      sendEmail(name, userEmail, message);
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-2">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Contact
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-purple-500 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
              <p className="pt-2 text-purple-100 text-sm">If you have any question, feel free to ask me! Have a nice day!</p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="inline-flex items-center space-x-2">
                <FaLocationDot className="text-2xl" />
                <p>{CONTACT.address}</p>
              </div>
              <div className="inline-flex items-center space-x-2">
                <FaPhone className="text-2xl" />
                <p>{CONTACT.phoneNo}</p>
              </div>
              <div className="inline-flex items-center space-x-2">
                <IoIosMail className="text-2xl" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.linkedin.com/in/phu-mai-nguyen-viet-663628252/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/PhuDangCode" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100014377148812" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/peanutngheolam/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>
          <div>            
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">Your Name</label>
                  <input type="text" name="name" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-purple-300" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">Your Email</label>
                  <input type="email" name="email" placeholder="Your email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-purple-300" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">Your Message</label>
                  <textarea rows="4" name="message" placeholder="Message" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-purple-300" />
                </div>
                <button type="submit" className="inline-block self-end bg-purple-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
