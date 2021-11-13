import React, { useState } from "react";

function SelectionModal({ handleChange, handleSubmit, value }) {
  let storedNames = [];
  if (localStorage.getItem("slots")) {
    storedNames = JSON.parse(localStorage.getItem("slots"));
  }

  const [input, setInput] = useState({});
  const buttonClick = (e) => {
    setInput({
      value: e,
    });
  };
  return (
    <>
      <div className="form-group" style={{ border: "1px solid #fff" }}>
        <label>Select Session:</label>
        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick(storedNames[0])}
        >
          <img src="./frontend/assets/images/morning-session-icon.png" />
          <br />
          {storedNames[0]}
        </button>

        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick(storedNames[1])}
        >
          <img src="./frontend/assets/images/afternoon-session-icon.png" />
          <br />
          {storedNames[1]}
        </button>

        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick(storedNames[2])}
        >
          <img src="./frontend/assets/images/evening-session-icon.png" />
          <br />
          {storedNames[2]}
        </button>
      </div>

      <button onClick={(e) => handleSubmit(input)}>Save</button>
    </>
  );
}

export default SelectionModal;
