import React, { useRef } from "react";
import "styles/imageFileInput.css";

const ImageFileInput = ({ imageUploader, setNewUserObj, darkTheme }) => {
  const inputFileRef = useRef();

  const onFileChange = async (event) => {
    const {
      currentTarget: { files },
    } = event;

    const uploaded = await imageUploader.upload(files[0]);
    setNewUserObj((data) => ({ ...data, photoURL: uploaded.url }));
  };

  const onClick = (event) => {
    event.preventDefault();
    inputFileRef.current.click();
  };
  return (
    <div className="image_file">
      <input
        className="file_input"
        ref={inputFileRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      <button className="file_button" onClick={onClick}>
        Edit
        <br /> Profile Image
      </button>
    </div>
  );
};

export default ImageFileInput;
