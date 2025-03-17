import React from 'react'
import './App.css'
import Button from './components/Button'
import RemoteComponent from './components/RemoteComponent'

function App() {
  return (
    <div className='app-container'>
      <h1>Remote Application</h1>
      <p>
        Questa è l'applicazione remota che espone componenti per l'applicazione
        host. Puoi accedere a questa applicazione direttamente, ma i suoi
        componenti sono destinati anche ad essere utilizzati dall'applicazione
        host.
      </p>

      <div className='components-showcase'>
        <h2>Componenti Esposti</h2>

        <div className='component-demo'>
          <h3>Button Component</h3>
          <Button
            onClick={() => alert('Cliccato nel contesto della remote app!')}
          />
        </div>

        <div className='component-demo'>
          <h3>RemoteComponent</h3>
          <RemoteComponent message='Messaggio di test dalla remote app' />
        </div>
      </div>
    </div>
  )
}

export default App
