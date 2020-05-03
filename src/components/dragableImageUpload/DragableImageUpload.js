import React, { useState } from "react";
import PropTypes, { useRef } from "prop-types";
import Upload from "../../assets/images/upload.png";

import "./DragableImageUpload.css";
import Button from "../button/Button";

const DragableImageUpload = (props) => {
  const { fileInputRef, openFileDialog, filesAdded } = props;
  const [highlight, setHighlight] = useState(false);
  const [fileName, setFileName] = useState("");

  const openFileDialogHandler = () => {
    fileInputRef.current.click();
  };

  const onFilesAddedHandler = (e) => {
    const files = e.target.files;
    const fileName = files[0].name;
    setFileName(fileName);

    filesAdded(files);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setHighlight(false);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setHighlight(true);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const fileName = files[0].name;

    setFileName(fileName);

    filesAdded(files);
    setHighlight(false);
  };

  return (
    <div
      //   className="dragable-upload-container"
      className={`dragable-upload-container ${highlight ? "highlight" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="mb-2 image-icon-container" name="upload" id="upload">
        <img src={Upload} alt="upload" className="upload-image mb-3" />
        <div>
          <label htmlFor="img">Drag and Drop to Upload</label>
          {fileName}
          <input
            ref={fileInputRef}
            className="upload-image-input"
            id="img"
            name="img"
            type="file"
            onChange={onFilesAddedHandler}
          />
        </div>
      </div>
      <div>
        <div className="">
          <Button
            customClassName="file-upload-btn bold-600"
            onClick={openFileDialogHandler}
            btndisabled={false}
          >
            Select file
          </Button>
        </div>
      </div>
    </div>
  );
};

DragableImageUpload.propTypes = {};

export default DragableImageUpload;
