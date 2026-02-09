import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { loadPageData } from './bootstrap.js'

async function start() {
  // bootstrap config
  const data = await loadPageData(); 

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App page_data={data}/>
    </StrictMode>,
  )
}

start();
