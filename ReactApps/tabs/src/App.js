import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";
import TabList from "./components/TabList";
import { useState } from "react";
function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  const [allTabs, setAllTabs] =useState([]);
  const tabs = [
    {
      label: "Tab1",
      content: "Content Panel 1",
      icon: "😍"
    },
    {
      label: "Tab2",
      content: "Content Panel 2",
      icon: "🤓"
    }
  ];

  return (
    <div>
     <Tabs tabs = {tabs} selectedIndex ={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </div>
  );
}

export default App;
