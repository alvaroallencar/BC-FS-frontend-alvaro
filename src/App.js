import React from "react";
import { hot } from "react-hot-loader";
import Header from "./organisms/Header";
import "./styles/global.css";
import Counter from "./molecules/Counter";

const App = () => (
  <>
    <Header />
    <div style={{ marginTop: 90 }} className="container">
      <Counter />
    </div>
  </>
);

export default hot(module)(App);
