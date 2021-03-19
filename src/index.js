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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
