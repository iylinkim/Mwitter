import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ImageUploader from "imageUploader";
import ImageFileInput from "components/ImageFileInput";

const imageUploader = new ImageUploader();
const ImageInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App ImageInput={ImageInput}/>
  </React.StrictMode>,
  document.getElementById("root")
);


