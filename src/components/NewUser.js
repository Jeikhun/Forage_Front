import React, { Component, useState } from "react";
import "../styles/registration.scss";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const NewUser = (props) => {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Error, setError] = useState("");
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    if (
      UserName != "" &&
      Password != "" &&
      Password != "" &&
      ConfirmPassword != ""
    ) {
      const response = await fetch(
        "https://localhost:7297/api/v1/Identity/Register",
        {
          method: "POST",
          body: JSON.stringify({
            username: UserName,
            email: Email,
            password: Password,
            confirmedPassword: ConfirmPassword,
            role: "Intern",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.statusCode == 200) {
        setError([]);
        localStorage.setItem("UserId", JSON.stringify(result.userId));
        history.push("/internRegister");
      } else {
        setError(result.message);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Fill all the gaps",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div id="wrapper">
      <section className="head">
        <h3>Registration(1)</h3>
      </section>
      <section className="inputs_sec">
        <form onSubmit={submit} className="inputs_form">
          <p className="text text-danger"> {Error != undefined ? Error : ""}</p>
          <div>
            <label htmlFor="UserName">UserName</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              id="UserName"
              placeholder="Forage"
            />
            <p className="text text-danger">
              {" "}
              {/* {Error.username != undefined ? Error.username[0] : ""} */}
            </p>
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="Email"
              placeholder="example@forage.com"
            />
            <p className="text text-danger">
              {" "}
              {/* {Error.email != undefined ? Error.email[0] : ""} */}
            </p>
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="Password"
              placeholder="*********"
            />
            <p className="text text-danger">
              {" "}
              {/* {Error.password != undefined ? Error.password[0] : ""} */}
            </p>
          </div>
          <div>
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="ConfirmPassword"
              placeholder="*********"
            />
            <p className="text text-danger">
              {" "}
              {/* {Error.confirmedPassword != undefined
                ? Error.confirmedPassword[0]
                : ""} */}
            </p>
          </div>
          <section className="register_sec">
            <button id="register_btn" type="submit">
              Next Step
            </button>
          </section>
        </form>
      </section>

      <section className="privacy-sec">
        <p className="privacy-text">
          By clicking on the button, you accept the{" "}
          <span className="underline">Terms</span> and{" "}
          <span className="underline">Conditions and Privacy Policy.</span>
        </p>
      </section>
      <section className="sign_sec">
        <p>
          Already have an account? <a href="">Sign in</a>
        </p>
      </section>
    </div>
  );
};

export default NewUser;
