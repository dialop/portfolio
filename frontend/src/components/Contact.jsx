import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? "" : "Name is required.";
    tempErrors.email = form.email ? "" : "Email is required.";
    tempErrors.message = form.message ? "" : "Message is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      console.log(form);
      // TODO: Add form submission logic here
    }
  };

  return (
    <section className="min-h-2-screen bg-white dark:bg-gray-900 lg:flex" >
      <div className="flex flex-col justify-center w-full p-8  lg:bg-gray-100 lg:dark:bg-gray-800 lg:px-12 xl:px-32 lg:w-1/2" >
        <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let's Connect.</h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Ask us everything and we would love to hear from you
        </p>

        <div className="mt-6 md:mt-8">
          <h3 className="font-medium text-gray-600 dark:text-gray-300 "></h3>

          <div className="flex mt-4 -mx-1.5 ">
            {/* <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
              </svg>
            </a> */}
            
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24" style={{ paddingTop: "100px" }}>
        <form onSubmit={handleSubmit}>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-400">
            get in touch
        </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
