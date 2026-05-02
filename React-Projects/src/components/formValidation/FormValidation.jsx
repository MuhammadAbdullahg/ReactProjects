import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // update formData
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "requried";
    }
    if (formData.email.includes("@") !== true) {
      newErrors.email = "must include @";
    }
    if (formData.password.length < 6) {
      newErrors.password = "password lenght must greater than 6";
    }
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <button
          type="submit"
          disabled={
            formData.name == "" ||
            formData.email == "" ||
            formData.password == ""
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
