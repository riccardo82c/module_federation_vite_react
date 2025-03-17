import React, { Suspense, useState } from 'react'
import './App.css'

// Importazione dinamica dei componenti remoti
const RemoteButton = React.lazy(() => import('remoteApp/Button'))
const RemoteComponent = React.lazy(() => import('remoteApp/RemoteComponent'))

function App() {
  const [count, setCount] = useState(0)

  // Funzione che verrà passata al micro-frontend remoto
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='app-container'>
      <h1>Host Application</h1>
      <p>Count: {count}</p>

      <div className='card'>
        {/* Utilizzo del componente remoto con fallback durante il caricamento */}
        <Suspense fallback={<div>Caricamento componente remoto...</div>}>
          <RemoteButton onClick={incrementCount} />
        </Suspense>
      </div>

      <div className='remote-component-container'>
        <Suspense fallback={<div>Caricamento componente remoto...</div>}>
          <RemoteComponent
            message={`Messaggio dall'host: il contatore è ${count}`}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default App
