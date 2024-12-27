import React from "react";
import "./App.css";

const Form = ({ count, setCount }) => {
    function handleChange(e) {
      const { name, value, type } = e.target;

      if (type === "radio" && name === "gender") {
        setCount({ ...count, [name]: value });
      } else {
        setCount({ ...count, [name]: value });
      }
    }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(count);
  }
  function resetButton() {
    setCount({
      firstname: "",
      secondname: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: '',
      url: "",
      male:'',
      female:'',
      others:''
    });
  }

  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name"
          onChange={(e) => handleChange(e)}
          required
          value={count.firstname}
        />
        <label htmlFor="secondname">Second Name*</label>
        <input
          type="text"
          name="secondname"
          placeholder="Enter Second Name"
          onChange={(e) => handleChange(e)}
          required
          value={count.secondname}
        />
        <label htmlFor="email">Email*</label>
        <input
          type="Email"
          name="email"
          placeholder="Enter Email"
          onChange={(e) => handleChange(e)}
          required
          value={count.email}
        />
        <label htmlFor="contact">Contact*</label>
        <input
          type="number"
          name="contact"
          placeholder="Enter Contact"
          onChange={(e) => handleChange(e)}
          required
          value={count.contact}
        />
        <label htmlFor="gender">Gender*</label>
        <div style={{ display: "flex" }}>
          <label htmlFor="male">male</label>
          <input
            type="radio"
            placeholder="male"
            name="gender"
            onChange={(e) => handleChange(e)}
            value="male"
            checked={count.gender === "male"}
          />
          <label htmlFor="Female">Female</label>
          <input
            type="radio"
            placeholder="Female"
            name="gender"
            onChange={(e) => handleChange(e)}
            value="female"
            checked={count.gender === "female"}
          />
          <label htmlFor="Other">Other</label>
          <input
            type="radio"
            placeholder="Others"
            name="gender"
            onChange={(e) => handleChange(e)}
            value="others"
            checked={count.gender === "others"}
          />
        </div>

        <label htmlFor="subject">Subject*</label>
        <select
          id=""
          name="subject"
          onChange={handleChange}
          value={count.subject}
          required
        >
          <option>MATHS</option>
          <option>PHYSICS</option>
          <option>CHEMISTRY</option>
        </select>
        <label htmlFor="resume">Resume*</label>
        <input
          type="file"
          name="resume"
          placeholder="Enter Resume"
          onChange={(e) => handleChange(e)}
          value={count.resume}
        />
        <label htmlFor="uRL">URL*</label>
        <input
          type="text"
          name="url"
          placeholder="Enter URL"
          onChange={(e) => handleChange(e)}
          required
          value={count.url}
        />
        <div className="button">
          <button className="buttons" type="submit">
            Submit
          </button>
          <button className="buttons" onClick={resetButton}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
