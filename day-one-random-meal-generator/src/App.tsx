import { useEffect, useState } from "react";
import fetchData from "./fetchData";

function App() {
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    async function getData() {
      const response = await fetchData(URL);
      setData(response);
    }
    if (data.length === 0) {
      getData();
    }
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return <h1>Hello world!</h1>;
}

export default App;
