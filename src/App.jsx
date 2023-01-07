import { useEffect, useState } from 'react'
import Wave from 'react-wavify'
import './App.css'
import { Characters } from './components/Characters/Characters'
import { CharacterProvider } from './context/CharacterContext'
import api from './services/api'

function App() {
  const [page, setPage] = useState(1)

  const [characterList,setCharacterList] = useState([])

  useEffect(() => {api.get(`/character/?page=${page}`)
  .then(res => setCharacterList(res.data.results))
  .catch(err => console.log(err)) },[page]
  )
  
  return (
    <div className="App">
      <CharacterProvider>
      <Wave className='Wave' fill='#84cc16'
        paused={false}
        options={{
          height: 100,
          amplitude: 100,
          speed: 0.15,
          points: 3
        }}
  />
        <Characters setPage={setPage} page={page} characterList={characterList} />
      </CharacterProvider>
    </div>
  )
}

export default App
