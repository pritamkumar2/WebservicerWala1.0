import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handelLogin = (e) => {
    e.preventDefault();

    console.log(user);
    alert("clicked login");
  };
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="container">
        <div className="login-Image">
          <img src="./images/login.png" alt="login img" height= "500"  width= "500"/>
        </div>
        <div className="loginArea">
          <h1 className="loginHeading">Login Form</h1>
          <br />
          <div className="formElement">
            <form onSubmit={handelLogin}>
              <div className="username">
                <label className="user" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className="userinput"
                  name="username"
                  placeholder="Username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handler}
                />
              </div>

              <div className="password">
                <label className="password" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="passwordinput"
                  name="password"
                  placeholder="Password"
                  required
                  value={user.password}
                  onChange={handler}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
