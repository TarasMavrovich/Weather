import { useState } from "react";
import Search from "./components/search/search";
import Trips from "./components/trips/trips";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Search value={search} setSearch={setSearch} />
      <Trips search={search} />
    </div>
  );
}

export default App;
