import { useState } from "react";
import axios from "axios";
export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handel = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(name);
  };

  const registationSub = (e) => {
    try {
      e.preventDefault();

      console.log(user);
      console.log("->>>>>>>>> hurree ");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container gird-two-cols">
              <div className="registration image">
                <img
                  src="./images/register.png"
                  alt="registration img"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                
              
                <form onSubmit={registationSub}>
                <h1 className="main-heading mb-3">registration form</h1>
                  <div>
                    <lable htmlFor="username">username</lable>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handel}
                    ></input>
                  </div>
                  <div>
                    <lable htmlFor="email">email</lable>
                    <input
                      type="email"
                      name="email"
                      placeholder="email adderess"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handel}
                    ></input>
                  </div>
                  <div>
                    <lable htmlFor="phone">phone</lable>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handel}
                    ></input>
                  </div>
                  <div>
                    <lable htmlFor="password">password</lable>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handel}
                    ></input>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
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
