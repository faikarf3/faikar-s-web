//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './body.tsx'
import Navbar from './navbar.tsx'
import Footer from './footer.tsx'

createRoot(document.getElementById('root')!).render(
  <>
      <Navbar />
      <Body />
      <Footer />
  </>
)
