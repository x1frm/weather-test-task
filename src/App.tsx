import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.tsx";
import Current from "./views/Current/Current.tsx";
import Forecast from "./views/Forecast/Forecast.tsx";

function App() {
  const [cityId, setCityId] = useState(0);
  const [mode, setMode] = useState<'current' | 'forecast'>('current')

  return (
      <>
          <div style={{ margin: 'auto'}}>
              <SearchBar onSubmit={setCityId}/>
              <div>
                  <input type="radio" id="current" name="mode" value="current" checked={mode === 'current'}
                    onChange={() => setMode('current')}
                  />
                  <label htmlFor="current">Current weather</label>
              </div>

              <div>
                  <input type="radio" id="forecast" name="mode" value="forecast" checked={mode === 'forecast'}
                     onChange={() => setMode('forecast')}
                  />
                  <label htmlFor="forecast">5-Day Forecast</label>
              </div>
          </div>
            {!!cityId && mode === 'current' && <Current cityId={cityId}/>}
            {!!cityId && mode === 'forecast' && <Forecast cityId={cityId}/>}
      </>
  )
}

export default App;
