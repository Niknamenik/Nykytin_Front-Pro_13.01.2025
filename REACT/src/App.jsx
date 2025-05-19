import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./header";
import { Content } from "./content";

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
