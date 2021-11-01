import React, { useState } from "react";

function SelectionModal({ handleChange, handleSubmit, value }) {
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
          onClick={() => buttonClick("4:30am - 10:30am")}
        >
          <img src="./frontend/assets/images/morning-session-icon.png" />
          <br />
          4:30am - 10:30am
        </button>

        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick("10:30am - 3:30pm")}
        >
          <img src="./frontend/assets/images/afternoon-session-icon.png" />
          <br />
          10:30am - 3:30pm
        </button>

        <button
          name="modalInputName"
          className="btn btn-outline-heyEvents modal-body-img"
          onClick={() => buttonClick("3:30pm - 9:30pm")}
        >
          <img src="./frontend/assets/images/evening-session-icon.png" />
          <br />
          3:30pm - 9:30pm
        </button>

      </div>

      <button onClick={(e) => handleSubmit(input)}>Save</button>
    </>
  );
}

export default SelectionModal;
