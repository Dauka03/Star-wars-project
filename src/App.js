import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer"

export default function App() {
  const [fan, setFan] = useState("");
  const [color, setColor] = useState("#151515");
  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const handleChangeColor = () =>{
    if(color==="#151515")
    setColor("white");
    else if(color==="white")
    setColor("#151515")
  }


  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleChangeColor }}>
      <Header fan={fan} color={color}/>
      <hr />
      <Content color={color}/>
      <Footer/>
    </DefaultContext.Provider>
  );
}
