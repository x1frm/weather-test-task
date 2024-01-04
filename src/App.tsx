import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.tsx";
import Current from "./views/Current.tsx";

function App() {
  const [cityId, setCityId] = useState(0);

  return (
    <div>
        <SearchBar onSubmit={setCityId}/>
        {!!cityId && <Current cityId={cityId}/>}
    </div>
  )
}

export default App;
