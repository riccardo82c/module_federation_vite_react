# Micro-Frontend con Vite e Module Federation

Questo repository dimostra un'implementazione di architettura micro-frontend utilizzando Vite e il plugin Module Federation. Il progetto consiste in due applicazioni React indipendenti che comunicano tra loro, pur essendo eseguite su server separati.

## Struttura del Progetto

- **host-app**: Applicazione principale (container) che importa componenti dall'app remota (porta 5000)
- **remote-app**: Applicazione che espone componenti da utilizzare nell'app host (porta 5001)

## Tecnologie Utilizzate

- React 19
- Vite 6
- Module Federation via @originjs/vite-plugin-federation

## Funzionalità

- Condivisione di componenti tra applicazioni separate
- Comunicazione bidirezionale tra micro-frontend
- Gestione dello stato condiviso tra applicazioni
- Caricamento dinamico dei componenti remoti

## Come iniziare

### Prerequisiti

- Node.js (versione 16 o superiore)
- bun

### Installazione

1. Clona il repository
   ```bash
   git clone https://github.com/riccardo82c/module_federation_vite_react.git
   cd module_federation_vite_react
   ```

2. Installa le dipendenze per entrambe le app
   ```bash
   # Installa dipendenze nell'app host
   cd host-app
   bun install

   # Installa dipendenze nell'app remote
   cd ../remote-app
   bun install
   ```

### Esecuzione

Per eseguire le applicazioni, avrai bisogno di due terminali:

**Terminale 1 - Avvia l'app remote:**
```bash
cd remote-app
bun run build
bun run preview
```

**Terminale 2 - Avvia l'app host:**
```bash
cd host-app
bun run dev
```

Dopo aver avviato entrambe le applicazioni:
- L'app host sarà disponibile su http://localhost:5000
- L'app remote sarà disponibile su http://localhost:5001

## Come funziona

1. L'app remote espone i componenti `Button` e `RemoteComponent` attraverso Module Federation.
2. L'app host importa dinamicamente questi componenti e li mostra nella sua interfaccia.
3. Il pulsante remoto può modificare lo stato nell'app host.
4. L'app host può passare dati al componente remoto tramite props.

## Particolarità con Vite Module Federation

A differenza dell'implementazione con Webpack:

1. I componenti remoti funzionano solo in modalità produzione, quindi è necessario buildare l'app remote.
2. I componenti remoti vengono caricati dinamicamente con `React.lazy` e `Suspense`.
3. Il percorso del remoteEntry.js è in `/assets/remoteEntry.js` anziché in radice.

## Casi d'uso

Questa architettura è particolarmente utile per:
- Applicazioni enterprise complesse con team distribuiti
- Migrazione graduale da monoliti legacy
- Integrazioni di diverse tecnologie frontend
- Dashboard componibili e personalizzabili

## Contribuire

I contributi sono benvenuti! Sentiti libero di aprire issue o inviare pull request.
