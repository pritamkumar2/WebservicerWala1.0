import React from "react";

export const Contact = () => {
  const [names, setName] = React.useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(names);
    // Implement form submission logic here (e.g., send email)
    alert(
      `Thanks for contacting me, ${names.name}! I'll get back to you shortly.`
    );
  };

  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setName({
      ...names,
      [name]: value,
    });
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-gray-100 rounded-lg shadow-md p-8 flex flex-col items-center mt-28">
        {/* Contact Form */}
        <div className="w-full md:w-96">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
            Let's get in touch!
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Name</label>
              <input
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                id="name"
                name="name"
                type="text"
                value={names.name}
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Email</label>
              <input
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                type="email"
                id="email"
                name="email"
                value={names.email}
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="phone">
                Phone No.
              </label>
              <input
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                type="tel"
                value={names.phone}
                name="phone"
                id="phone"
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                value={names.message}
                name="message"
                id="message"
                onChange={change}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>

          {/* Image (Visible on larger screens) */}
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.955855905521!2d86.96641120000001!3d23.677536600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f1416aeb3db%3A0x9babc8256d15dc34!2sQehar%20studio&#39;s!5e0!3m2!1sen!2sin!4v1703916832695!5m2!1sen!2sin"
        width="100%"
        height="300"
        
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
