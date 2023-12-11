import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost/sahepsipb12/backend/");
      const data = await response.json();
      console.log(data);
    }
    getData();
  }, []);

  return <h1>Hi from frontend</h1>;
}

export default App;
