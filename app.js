import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object =>HTMLElement
// const heading = React.createElement("h1", {}, "Helloworld");

//JSX - is not Html in JS ==> its React.createElement object in the end
//JSX ==> Babel transpiles it into React.CreateElement  ==> ReactElement-js Object ==> HTMLElement(render)

const heading = <h1>Hello World from JSX</h1>

//React Functional Component
const HeadingComponent = () =>{
    return <h1>Hello world from Functional Component</h1>;
}

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
root.render(<HeadingComponent />);
