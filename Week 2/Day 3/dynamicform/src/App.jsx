import { useState } from "react";
import "./App.css";

function App() {
  // STATE: array of members
  const [members, setMembers] = useState([
    { id: Date.now(), name: "" }
  ]);

  // STATE: errors for validation
  const [errors, setErrors] = useState({});

  // HANDLE INPUT CHANGE
  const handleChange = (id, value) => {
    const updated = members.map((m) => {
      if (m.id === id) {
        return { ...m, name: value };
      }
      return m;
    });

    setMembers(updated);
  };

  // ADD MEMBER
  const addMember = () => {
    setMembers([
      ...members,
      { id: Date.now(), name: "" }
    ]);
  };

  // REMOVE MEMBER
  const removeMember = (id) => {
    if (members.length === 1) return; // prevent removing last

    const filtered = members.filter((m) => m.id !== id);
    setMembers(filtered);
  };

  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    members.forEach((m) => {
      if (m.name.trim() === "") {
        newErrors[m.id] = "Name is required";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(members);
      alert("Form submitted! Check console");
    }
  };

  return (
    <div className="container">
      <h2>Team Members</h2>

      <form onSubmit={handleSubmit}>
        {members.map((member) => (
          <div className="row" key={member.id}>
            
            <input
              type="text"
              placeholder="Enter name"
              value={member.name}
              onChange={(e) =>
                handleChange(member.id, e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => removeMember(member.id)}
              disabled={members.length === 1}
            >
              ✕
            </button>

            {errors[member.id] && (
              <p className="error">{errors[member.id]}</p>
            )}
          </div>
        ))}

        <button type="button" onClick={addMember}>
          + Add Member
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;