// import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import React, { useState, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./FileUpload.css";
import DeleteIcon from "@mui/icons-material/Delete";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  // fontSize: "100px",
});

const FileUpload = () => {
  const [fileName, setFileName] = useState("File Name");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  const removeFile = () => {
    setFileName("File Removed");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  return (
    <div className="file-upload-container">
      <form className="file-upload-area">
        <div className="file-logo">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{
              background: "none",
              color: "#00000088",
              marginTop: "20px",
              boxShadow: "none",
              "&:hover": {
                background: "none",
                boxShadow: "none",
                color: "#002f6e",
                "& .MuiSvgIcon-root": {
                  filter: "drop-shadow(0 5px 20px 5px #00000028)",
                },
              },
            }}
          >
            <CloudUploadIcon
              sx={{
                fontSize: 100,
                // "&:hover": {
                //   filter: "drop-shadow(0 5px 20px 5px #00000028)",
                // },
              }}
            />
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </Button>
          <p style={{ color: "#00000088", fontWeight: "500" }}>
            Note: .csv /.json /.xlsx{" "}
          </p>
        </div>
        <div className="file-input">
          <div className="file-name">
            <span
              style={{
                color:
                  fileName === "File Name"
                    ? " rgba(0, 0, 0, 0.455)"
                    : fileName === "File Removed"
                    ? "#00000088"
                    : "#002a6e",
                fontWeight: "500",
              }}
            >
              {fileName}
            </span>
            {fileName !== "File Name" && fileName !== "File Removed" ? (
              <span onClick={removeFile} style={{ cursor: "pointer" }}>
                <DeleteIcon />
              </span>
            ) : null}
          </div>
          <div className="submit-button"> Submit</div>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
