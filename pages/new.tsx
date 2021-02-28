import { useState } from "react";

function New(props) {
  const [id, setId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`ID:${id}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input value={id} onChange={(event) => setId(event.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default New;
