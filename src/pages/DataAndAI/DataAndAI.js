import React, { useState } from "react";
import "./DataAndAI.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import Typical from "react-typical";
import { Avatar } from "@mui/material";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";

const DataAndAI = () => {
  const [age, setAge] = useState("");
  const [promptInput, setPromptInput] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // const newPrompt = { promptInput };

    setSubmittedPrompt(promptInput);

    setPromptInput("");
  }
  return (
    <div className="dataAI-container">
      <div className="dataAI-header-title">
        <h4 className="h4">Data & AI</h4>
        <ProfileSettings />
      </div>
      <div className="dataAI-area">
        <div className="row" style={{ marginRight: "0", marginLeft: "0" }}>
          <div className="top-sec">
            <h5 className="h5">File Name</h5>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select File
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // sx={{ color: "aliceblue" }}
                value={age}
                onChange={handleChange}
                label="Select File"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>File 1</MenuItem>
                <MenuItem value={20}>File 2</MenuItem>
                <MenuItem value={30}>File 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row" style={{ margin: "0" }}>
          <div className="mid-sec">
            {submittedPrompt && (
              <Typical steps={[submittedPrompt, 5000]} wrapper="span" />
            )}
          </div>
        </div>
        <div className="row" style={{ margin: "0" }}>
          <form onSubmit={handleSubmit} className="AI-inputs">
            <input
              type="text"
              placeholder="Ask anything about selected file"
              value={promptInput}
              onChange={(e) => {
                console.log(e.target.value);
                setPromptInput(e.target.value);
              }}
            />
            <button
              style={{
                backgroundColor: "aliceblue",
                padding: "9px",
                border: "none",
              }}
            >
              <SendIcon />
            </button>
          </form>
        </div>
        <p className="p">
          <strong>Note</strong> : you can ask related questions about
          “Infosight, forecasting future data, data comparison, chart analysis,
          info summarization, problem-solving, training a prediction model,
          domain analysis and prediction, and generating a case study”.
        </p>
      </div>
    </div>
  );
};

export default DataAndAI;
