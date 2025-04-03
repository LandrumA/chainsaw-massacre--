import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    axios.get('http://10.50.20.121:5000/')
      .then(res => setMessage(res.data))
      .catch(() => setMessage("Failed to fetch message"))
  }, [])

  return (
    <div style={{ padding: '2rem', fontSize: '1.5rem' }}>
      {message}
    </div>
  )
}

export default App
