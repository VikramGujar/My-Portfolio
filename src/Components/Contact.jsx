import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="contact py-16 bg-zinc-900">
      <div className="container mx-auto px-6 lg:flex lg:items-start lg:justify-between lg:gap-10">
        
        <div className="lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h2 className="text-center text-5xl font-bold mb-8 component-headings">Contact me to bring your ideas to life!</h2>
          <p className="text-lg text-zinc-400 mb-6">
            Reach out today to start building innovative solutions. <br />
            I’m excited to collaborate on your next big idea. <br />
            Let’s turn your vision into reality together.
          </p>
          <div className="text-zinc-400 mb-6">
            <p>Email: <a href="mailto:vikramgujar300@gmail.com" className="text-sky-500">vikramgujar300@gmail.com</a></p>
            <p>Phone: <a href="tel:+919577014555" className="text-sky-500">+91 95770 14555</a></p>
          </div>
        </div>

       
        <div className="lg:w-1/2" data-aos="fade-left">
          <h3 className="text-3xl font-semibold text-sky-500 mb-6">I would love to hear your thoughts!</h3>
          <form 
            action="https://getform.io/f/amdpvyeb" 
            method="POST" 
            className="bg-zinc-800 p-6 rounded-lg">
            
          
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-sky-500"
              />
            </div>

            
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-sky-500"
              />
            </div>

            
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-sky-500"
              />
            </div>

            
            <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

           
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
