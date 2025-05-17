import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Master from './master/master.tsx'
import { AuthProvider } from './master/context/authProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Master />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
