import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FETCH_ALL_EPISODES } from './api/episodes'
import { useQuery } from '@apollo/client'

function App() {
  const [count, setCount] = useState(0)

  const { data } = useQuery(FETCH_ALL_EPISODES, {
    variables: { search: "" }, // Pass an empty string or a search term
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
