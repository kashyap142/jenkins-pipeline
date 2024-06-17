import { useState } from "react";

export default function Input() {
  const [name, setName] = useState(null);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <br />
      <p>
        Hello <strong>{name ?? "Visitor"}</strong>
      </p>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={name}
      />
      {/* <br /> */}
    </section>
  );
}
