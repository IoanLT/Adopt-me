import React from "react";
// import ReactDOM from "react-dom";

const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};

export default Pet;