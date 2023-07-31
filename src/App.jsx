import React, { useState } from "react";
import "./App.css";
import Header from "./Componenets/Header";
import GeneralInfo from "./Componenets/GeneralInfo";
import CVDiv from "./Componenets/CVDiv";
import Education from "./Componenets/Education";
import Exprience from "./Componenets/Exprience";

function App() {
  const [Name, setName] = useState('')
  const [Edu, setEdu] = useState('')
  const [Exp, setExp] = useState('')
  function getGI(childData){
    setName(childData);
    return childData
  }
  function getEdu(childData){
    setEdu(childData);
    return childData
  }
  function getExp(childData){
    setExp (childData);
    console.log(childData);
    return childData
  }
  return (
    <div className="Roots">
      <Header/>
      <div className="MainPanel">
        <div className="LeftPanel">
          <GeneralInfo getGeneralInfo={getGI}/>
          <Education getEduInfo={getEdu}/>
          <Exprience getExp={getExp}/>
        </div>
        <div className="RightPanel">
          <CVDiv data={Name} Edu={Edu} Exp={Exp}/>
        </div>
      </div>
    </div>
  );
}

export default App;
