import "./App.css";
import Main from "./components/Main";
import Thanks from "./components/Thanks";
import React from "react";

function App() {
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState(true);

  const obtenerRating = (e) => {
    const valorRating = e.target.innerHTML;
    setValue(valorRating);
  };

  const changeDisplay = () => {
    setActive(!active);
  };
  return (
    <div>
      <Main
        hacerClick={obtenerRating}
        mostrar={active}
        cambiarDisplay={changeDisplay}
        rating={value}
      />
      <Thanks rating={value} mostrar={active} />
    </div>
  );
}

export default App;
