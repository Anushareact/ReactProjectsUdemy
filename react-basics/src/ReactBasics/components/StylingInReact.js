import React from 'react';
import "../components/StylingReact.css";
import Styles from "../components/Styling.module.css"

const StylingInReact = () => {
  return (
    <div>
      <h1>StylingInReact</h1>
      <h2 style={{ color: "red", backgroundColor: "blue" }}>
        1.Inline Styling
      </h2>
      <h3 style={demoCSSinJSStyles}>2.CSS in JS</h3>
      <h4 className={["external-css"]}>4.External css file(like app.css)</h4>
      <h5 className={Styles.ModuleCss}>CSS Modules</h5>
    </div>
  );
}
//css in js styling
const demoCSSinJSStyles = {
  fontSize: "20px",
  opacity: 0.4,
  color: "magenta",

};
export default StylingInReact