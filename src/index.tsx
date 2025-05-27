import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NewHeader from './components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewHeader />
  </StrictMode>,
)
