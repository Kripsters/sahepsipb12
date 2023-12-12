import { useEffect, useState } from "react";
import Shape from "./Shape.js";

function App() {
  const [loading, setLoading] = useState(1);
  const [shapes, setShapes] = useState([]);

  const shapesJSX = shapes.map((current, index) => {
    return <Shape key={index} area={current[1]} />;
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost");
      const data = await response.json();
      setShapes(data);
      console.log(data);
      setLoading(0);
    }
    getData();
  }, [loading]);
  return <>{loading ? <p>Loading...</p> : <p>test</p>}</>;
}

export default App;
