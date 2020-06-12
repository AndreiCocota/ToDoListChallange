import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          onChange={handleChange}
          placeholder="Your to-do..."
          type="text"
          value={inputText}
        />
        <Button
          className="addingButton"
          variant="primary"
          type="submit"
          onClick={() => {
            props.onAdd(inputText);
            setInputText("");
          }}
        >
          <span>Add</span>
        </Button>
      </InputGroup>
    </div>
  );
}

export default InputArea;
