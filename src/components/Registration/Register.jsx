import React, { useState } from "react";
import UserDataDisplay from "./UserDataDisplay";
const Register = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    bgColor: "#f1356d",
    textColor: "#ffffff",
    password: "",
  });

  const [registeredUsers, setRegisteredUsers] = useState({});
  const [errors, setErrors] = useState({});

  const [isShowCard, setIsShowCard] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setRegisteredUsers(userData);
      setIsShowCard(true); // Show the form after registration
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    // Validate First Name
    if (userData.firstname.trim() === "") {
      validationErrors.firstname = "First Name is required";
    }

    // Validate Last Name
    if (userData.lastname.trim() === "") {
      validationErrors.lastname = "Last Name is required";
    }

    // Validate Email
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(userData.email)) {
      validationErrors.email = "Invalid Email Address";
    }

    // Validate Phone Number
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(userData.phone)) {
      validationErrors.phone = "Phone Number must be a 11-digit number";
    }

    //  Validate Password
    const passwordPattern =
      /^(?=(?:[a-zA-Z]*\d){3})(?=(?:\d*[a-zA-Z]){4})[a-zA-Z\d\W]{8,}$/;
    if (!passwordPattern.test(userData.password)) {
      validationErrors.password =
        "Password must be at least 4 characters long and contain at least 3 digits";
    }

    return validationErrors;
  };

  return (
    <div style={{ display: "flex" }}>
      <form className="reg-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Registration Form</h2>
        </div>
        <div className="input-group">
          <label htmlFor="firstname">Name</label>
          <div className="name-input-wrapper">
            <div className="name-input">
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={userData.firstname}
                onChange={handleChange}
              />
              <span>First Name</span>
              {errors.firstname && (
                <div className="error">{errors.firstname}</div>
              )}
            </div>
            <div className="name-input">
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={userData.lastname}
                onChange={handleChange}
              />
              <span>Last Name</span>
              {errors.lastname && (
                <div className="error">{errors.lastname}</div>
              )}
            </div>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <div className="input-wrapper">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="09 999 999 999"
              value={userData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
        </div>
        <div className="color-input">
          <label htmlFor="bg-color">Color</label>
          <div className="color-input-wrapper">
            <label htmlFor="bg-color">Background : </label>
            <input
              type="color"
              name="bgColor"
              id="bg-color"
              value={userData.bgColor}
              onChange={handleChange}
            />
            <label htmlFor="text-color">Text : </label>
            <input
              type="color"
              name="textColor"
              id="text-color"
              value={userData.textColor}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
        </div>
        <button type="submit" className="reg-btn">
          Register
        </button>
      </form>
      {isShowCard && <UserDataDisplay user={registeredUsers} />}
    </div>
  );
};

export default Register;
