import React, { Component, useState } from "react";
import "../styles/registration.scss";
import axios from "axios";
import Swal from "sweetalert2";
const InternRegister = () => {
  const [File, setFile] = useState();
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [BirthYear, setBirthYear] = useState("");
  const [Experience, setExperience] = useState("");
  const [FinNumber, setFinNumber] = useState("");
  const [Error, setError] = useState([]);
  const userId = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : "";

  const submit = async (e) => {
    e.preventDefault();
    if (
      Name != "" &&
      Surname != "" &&
      BirthYear != "" &&
      FinNumber != "" &&
      Experience != ""
    ) {
      const formData = new FormData();
      formData.append("Name", Name);
      formData.append("Surname", Surname);
      formData.append("BirthYear", BirthYear.toString());
      formData.append("FinNumber", FinNumber);
      formData.append("Experience", Experience);
      formData.append("AppUserId", userId);
      await axios.post('https://localhost:7297/api/Intern"', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // const response = await fetch("https://localhost:7297/api/Intern", {
      //   method: "POST",
      //   body: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // const result = await response.json();
      console.log(response.result);
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
        <h3>Registration(2)</h3>
      </section>

      <section className="inputs_sec">
        <form onSubmit={submit} className="inputs_form">
          <div className="test">
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                placeholder="Ali"
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text text-danger"></p>
            </div>
            <div>
              <label htmlFor="Surname">Surname</label>
              <input
                type="text"
                id="Surname"
                placeholder="Aliyev"
                onChange={(e) => setSurname(e.target.value)}
              />
              <p className="text text-danger"></p>
            </div>
          </div>
          <div>
            <label htmlFor="Birth">Date of Birth</label>
            <input
              type="date"
              id="Birth"
              placeholder="17.01.1998"
              onChange={(e) => setBirthYear(e.target.value)}
            />
            <p className="text text-danger"></p>
          </div>
          <div>
            <label htmlFor="Experience">Experience (if there)</label>
            <input
              type="text"
              id="Experience"
              placeholder="Write your work experience"
              onChange={(e) => setExperience(e.target.value)}
            />
            <p className="text text-danger"></p>
          </div>
          <div>
            <label htmlFor="Image">Image</label>
            <input
              filename={File}
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              accept="image/*"
              id="Image"
            />
            <p className="text text-danger"></p>
          </div>
          <div>
            <label htmlFor="Fin">Fin Number</label>
            <input
              type="text"
              id="Fin"
              placeholder="*******"
              onChange={(e) => setFinNumber(e.target.value)}
            />
            <p className="text text-danger"></p>
          </div>
          <section className="register_sec">
            <button id="register_btn" type="submit">
              Register
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

export default InternRegister;
