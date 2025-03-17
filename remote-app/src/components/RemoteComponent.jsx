import React, { useState, useEffect } from 'react'

const RemoteComponent = ({ message }) => {
  const [localState, setLocalState] = useState('Inizializzazione...')

  useEffect(() => {
    // Simulazione di una operazione asincrona nel micro-frontend
    const timer = setTimeout(() => {
      setLocalState('Componente remoto pronto!')
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        border: '2px solid #3498db',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h3>Componente da Micro-Frontend Remoto</h3>
      <p>Stato locale: {localState}</p>
      <p>
        Messaggio ricevuto dall'host: <strong>{message}</strong>
      </p>
    </div>
  )
}

export default RemoteComponent
