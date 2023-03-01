import React, { useEffect } from "react";

const apiUrl = import.meta.env;
type MiCadena = string;

const App = (): JSX.Element => {
  const miFuncion = (valor: MiCadena): string => {
    console.log(valor);
    console.log(apiUrl);
    return "hi";
  };
  const otraFunction = (value: string): void => {
    console.log(value);
  };
  useEffect(() => {
    otraFunction("hi");
    miFuncion("hi");
  }, []);
  return <div>App</div>;
};
export default App;
