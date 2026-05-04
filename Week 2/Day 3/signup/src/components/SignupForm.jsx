import { useState } from "react";
import "./SignupForm.css";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
};

export default function SignupForm() {
  const [values, setValues] = useState(initialValues);

  const [touched, setTouched] = useState({});
  
  const [success, setSuccess] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // handle blur (mark touched)
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // validation logic
  const validate = () => {
    const errors = {};

    if (!values.fullName || values.fullName.length < 2) {
      errors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email";
    }

    if (
      values.password.length < 8 ||
      !/\d/.test(values.password)
    ) {
      errors.password = "Min 8 chars + 1 number";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match";
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!usernameRegex.test(values.username)) {
      errors.username = "3–15 chars, letters/numbers/_ only";
    }

    return errors;
  };

  const errors = validate();

  const isValid = Object.keys(errors).length === 0;

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    setSuccess(true);
    setValues(initialValues);
    setTouched({});
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Signup</h2>

      {/* Full Name */}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.fullName && errors.fullName && (
        <p className="error">{errors.fullName}</p>
      )}

      {/* Email */}
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email && (
        <p className="error">{errors.email}</p>
      )}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}

      {/* Confirm Password */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      {/* Username */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
      )}

      <button disabled={!isValid}>Submit</button>

      {success && <p className="success">Account created!</p>}
    </form>
  );
}