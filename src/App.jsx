import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch('/employees.json')

        if (!response.ok) {
          throw new Error ('fetch Employee failed')
        }

        const fetchedData = await response.json()
        setData(fetchedData)
      } catch (e) {
        console.log(e, e.message)
      }
    }

    fetchData()

  }, []);

  return (
    <>

    </>
  )
}

export default App
