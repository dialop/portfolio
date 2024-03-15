import React from "react";
import { useState } from "react";


const Contact = () => {

    const [formData, setFormData] = useState({

        name: '',
        email: '', 
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
      };
    
      return (
        <div className="bg-white text-black py-10 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-center mb-3">Contact</h1>
              <p className="mb-3">Get in touch</p>
              <p>Email: diana.lophernandez@gmail.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-1/2 p-2 bg-gray-700 border-2 border-gray-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-1/2 p-2 bg-gray-700 border-2 border-gray-600"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border-2 border-gray-600"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      );
    };



export default Contact;