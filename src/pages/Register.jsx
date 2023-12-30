import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const registrationSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("->>>>>>>>> hurree ");
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration mt-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Hide the image in mobile view */}
              <div className="registration-image hidden md:block ">
                <img
                  src="./images/register.png"
                  alt="registration img"
                  className="w-full h-full"
                />
              </div>
              <div className="registration-form p-4">
                <form onSubmit={registrationSubmit}>
                  {/* Adjust the registration title in mobile view */}
                  <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    Registration Form
                  </h1>
                  <div className="mb-4">
                    <label htmlFor="username" className="block mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded"
                  >
                    Register now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
