import React, { useState } from "react";
import "../styles/registration.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const InternRegister = () => {
  const [Image, setImage] = useState();
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [BirthYear, setBirthYear] = useState("");
  const [Experience, setExperience] = useState("");
  const [FinNumber, setFinNumber] = useState("");
  const [Error, setError] = useState([]);
  const userId = localStorage.getItem("UserId")
    ? JSON.parse(localStorage.getItem("UserId"))
    : "";
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", Image);
    formData.append("Name", Name);
    formData.append("Surname", Surname);
    formData.append("BirthYear", BirthYear);
    formData.append("FinNumber", FinNumber);
    formData.append("Experience", Experience);
    formData.append("AppUserId", userId);
    var response = await fetch("https://localhost:7297/api/Intern", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (result.statusCode == 201) {
      setError([]);
    } else {
      setError(result.errors);
    }
  };

  return (
    <div id="wrapper">
      <section className="head">
        <h3>Registration(2)</h3>
      </section>

      <section className="inputs_sec">
        <form className="inputs_form" onSubmit={submit}>
          <div className="test">
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                name="Name"
                // {...register("Name", { required: true })}
                placeholder="Ali"
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text text-danger">
                {" "}
                {Error.Name != undefined ? Error.Name[0] : ""}
              </p>
            </div>
            <div>
              <label htmlFor="Surname">Surname</label>
              <input
                type="text"
                id="Surname"
                name="Surname"
                placeholder="Aliyev"
                onChange={(e) => setSurname(e.target.value)}
              />
              <p className="text text-danger">
                {" "}
                {Error.Surname != undefined ? Error.Surname[0] : ""}
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="Birth">Date of Birth</label>
            <input
              type="date"
              id="Birth"
              name="birthYear"
              placeholder="17.01.1998"
              onChange={(e) => setBirthYear(e.target.value)}
            />
            <p className="text text-danger">
              {" "}
              {Error.BirthYear != undefined ? Error.BirthYear[0] : ""}
            </p>
          </div>
          <div>
            <label htmlFor="Experience">Experience (if there)</label>
            <input
              type="text"
              id="Experience"
              name="Experience"
              placeholder="Write your work experience"
              onChange={(e) => setExperience(e.target.value)}
            />
            <p className="text text-danger">
              {" "}
              {Error.Experience != undefined ? Error.Experience[0] : ""}
            </p>
          </div>
          <div>
            <label htmlFor="Image">Image</label>
            <input
              onChange={saveFile}
              type="file"
              name="Image"
              accept="image/*"
              id="input"
            />
            <p className="text text-danger">
              {" "}
              {Error.Image != undefined ? Error.Image[0] : ""}
            </p>
          </div>
          <div>
            <label htmlFor="Fin">Fin Number</label>
            <input
              type="text"
              id="Fin"
              name="FinNumber"
              placeholder="*******"
              onChange={(e) => setFinNumber(e.target.value)}
            />
            <p className="text text-danger">
              {" "}
              {Error.FinNumber != undefined ? Error.FinNumber[0] : ""}
            </p>
          </div>
          <div>
            <input type="text" hidden name="AppUserId" defaultValue={userId} />
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
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </section>
    </div>
  );
};

export default InternRegister;
