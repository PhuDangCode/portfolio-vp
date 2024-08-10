import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import logo from "../assets/vp.png";
import cool from "../assets/cool.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import Draggable from 'react-draggable';

const Navbar = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleLikeClick = async () => {
    setLikeCount(likeCount + 1);

    try {
      // Fetch the user's location based on IP
      const response = await axios.get('https://ipinfo.io/json?token=0eb0add40c737c');
      const { city, region, country } = response.data;

      // Send an email with the user's location information
      sendEmail({
        message: `Someone clicked the heart icon. Location: ${city}, ${region}, ${country}`,
        location: `${city}, ${region}, ${country}`
      });
    } catch (error) {
      console.error('Error fetching location:', error);
      sendEmail({
        message: 'Someone clicked the heart icon, but their location could not be determined.',
        location: 'Unknown'
      });
    }
  };

  const sendEmail = (data) => {
    emailjs.send(
      'service_rj01efm', // Your EmailJS service ID
      'template_t31phfj', // Your EmailJS template ID
      {
        message: data.message,
        location: data.location
      },
      '6iTmQL2mNbqWieGiK' // Your EmailJS user ID
    ).then(
      response => console.log('Email sent successfully!'),
      error => console.error('Failed to send email:', error.text)
    );
  };

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const closeCard = () => {
    setIsCardVisible(false);
  };

  return (
    <nav className="relative mb-20 flex items-center justify-between py-6">
      <button onClick={toggleCardVisibility} className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </button>

      {isCardVisible && (
        <Draggable>
          <div className="absolute top-16 left-1/3 transform -translate-x-1/2 max-w-md overflow-hidden rounded-2xl shadow-lg group z-50">
            <img src={cool} alt="" className="transition-transform group-hover:scale-110 duration-200" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <div className="p-6 flex items-center space-x-2 text-white">
                <p className="hidden md:block">This is my portfolio website. It will be wonderful if you give me a like</p>
                <button onClick={handleLikeClick} className="text-white text-2xl">
                  ❤️
                </button>
                <span>{likeCount}</span>
              </div>
            </div>
            <button onClick={closeCard} className="absolute top-2 right-2 text-white text-2xl">
              <FaTimes />
            </button>
          </div>
        </Draggable>
      )}

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/phu-mai-nguyen-viet-663628252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/PhuDangCode" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100014377148812" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/peanutngheolam/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
