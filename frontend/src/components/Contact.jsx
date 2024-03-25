import React from 'react';

function Contact() {
  return (
    <section id="contact" className="flex justify-center items-center  transparent">
      <div className="flex flex-col justify-center items-center p-8 lg:px-12 xl:px-32 w-full">

        <h1 className="text-5xl font-semibold text-gray-800 capitalize dark:text-white text-center">
          Let's Connect.
        </h1>
        <a href="mailto:dianalophernandez@gmail.com" className="mt-6 text-blue-600 dark:text-blue-400 text-center hover:underline text-3xl">
          dianalophernandez@gmail.com
        </a>

      </div>
    </section>
  );
}

export default Contact;
