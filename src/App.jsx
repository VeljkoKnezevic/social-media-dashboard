import { useState } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import "./styles/styles.scss";

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={checked ? "light" : "dark"}>
      <Header checked={checked} setChecked={setChecked} />
      <main>
        <Stats />
        <Overview />
      </main>
    </div>
  );
};

export default App;
