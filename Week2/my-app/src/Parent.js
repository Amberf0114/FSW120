import React from "react";

function Parent(props) {
  const styleObj={
    backgroundColor: "lavender",
    fontSize: "25px",
    fontWeight: "bold"
  }
  const bodyStyleObj={
    fontSize: "14px",
    fontFamily: "sans-serif"
  }
  return (
    <div className="parent">
      <title>{props.fileInfo.title}</title>
      <sub style={styleObj}>{props.fileInfo.subtitle}</sub>
      <p style={bodyStyleObj}>{props.fileInfo.information}</p>
    </div>
  );
}

export default Parent;
/*Create a component that you can reuse 10 times. This component should be able to receive props for:

Background Color
Title
Subtitle
Information
This component should be styled and built out well.

Manually pass in props for each component from a parent component. */