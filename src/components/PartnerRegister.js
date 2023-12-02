import React, { useEffect } from "react";
import "../styles/registration.scss";
import { useState } from "react";
import axios from "axios";
const PartnerRegister = () => {
  useEffect(() => {
    axios.get("https://localhost:7297/api/CompanyIndustryField").then((res) => {
      setField(res.data.items);
    });
  });
  const [Image, setImage] = useState();
  const [Name, setName] = useState("");
  const [LegalAddress, setLegalAddress] = useState("");
  const [ActualAddress, setActualAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [ContactPersonName, setContactPersonName] = useState("");
  const [fieldId, setfieldId] = useState();
  const [Error, setError] = useState([]);
  const [Field, setField] = useState([]);
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
    formData.append("file", Image);
    formData.append("Name", Name);
    formData.append("LegalAddress", LegalAddress);
    formData.append("ActualAddress", ActualAddress);
    formData.append("PhoneNumber", PhoneNumber);
    formData.append("ContactPersonName", ContactPersonName);
    formData.append("CompanyIndustryFieldId", fieldId);
    formData.append("AppUserId", userId);
    var response = await fetch("https://localhost:7297/api/Company", {
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
        <h3>Registration</h3>
      </section>

      <section className="inputs_sec">
        <form className="inputs_form" onSubmit={submit}>
          <div>
            <label htmlFor="CompanyName">Company name</label>
            <input
              type="text"
              id="CompanyName"
              name="Name"
              placeholder="Forage"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text text-danger">
              {" "}
              {Error.Name != undefined ? Error.Name[0] : ""}
            </span>
          </div>
          <div>
            <label htmlFor="LegalAddress">Legal address</label>
            <input
              type="text"
              id="LegalAddress"
              placeholder="Legal address"
              name="LegalAddress"
              onChange={(e) => setLegalAddress(e.target.value)}
            />
            <span className="text text-danger">
              {" "}
              {Error.LegalAddress != undefined ? Error.LegalAddress[0] : ""}
            </span>
          </div>
          <div>
            <label htmlFor="ActualAddress">Actual address</label>
            <input
              type="text"
              id="ActualAddress"
              placeholder="Actual address"
              onChange={(e) => setActualAddress(e.target.value)}
            />
            <span className="text text-danger">
              {" "}
              {Error.ActualAddress != undefined ? Error.ActualAddress[0] : ""}
            </span>
          </div>
          <div>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="text"
              id="PhoneNumber"
              placeholder="+994-10-100-10-10"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className="text text-danger">
              {" "}
              {Error.PhoneNumber != undefined ? Error.PhoneNumber[0] : ""}
            </span>
          </div>
          <div>
            <label htmlFor="ContactPersonName">Contact person’s name </label>
            <input
              type="text"
              id="ContactPersonName"
              placeholder="Benedict Timothy Carlton Cumberbatch"
              onChange={(e) => setContactPersonName(e.target.value)}
            />
            <span className="text text-danger">
              {" "}
              {Error.ContactPersonName != undefined
                ? Error.ContactPersonName[0]
                : ""}
            </span>
          </div>
          <div>
            <label htmlFor="CompanyField">Field</label>
            <select onChange={(e) => setfieldId(e.target.value)} name="" id="">
              {Field.map((data) => {
                return (
                  <option value={data.id} key={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <span className="text text-danger"></span>
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
              {Error.file != undefined ? Error.file[0] : ""}
            </p>
          </div>
          <section className="register_sec">
            <button type="submit" id="register_btn">
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

export default PartnerRegister;
