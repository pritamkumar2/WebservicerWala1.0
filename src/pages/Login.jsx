import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(user);
    alert("Clicked login");
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="registration-form mt-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Hide the image in mobile view */}
          <div className="login-image hidden md:block">
            <img
              src="./images/login.png"
              alt="login img"
              className="w-full h-full"
            />
          </div>
          <div className="login-area p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Login Form</h1>
            <div className="form-element">
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    name="username"
                    placeholder="Username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2"
                    name="password"
                    placeholder="Password"
                    required
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
