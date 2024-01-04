import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.tsx";
import weatherApi from "./services/weatherApi.ts";

function App() {
  const [weat, setCount] = useState(0);

  const onCitySelect = (id: number) => {
      weatherApi.current(id)
  }

  return (
    <div id="app">
      <SearchBar onSubmit={onCitySelect}/>
    </div>
  )
}

export default App
