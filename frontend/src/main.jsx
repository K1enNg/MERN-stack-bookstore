import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowswerRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
<BrowswerRouter>
  <App/>
</BrowswerRouter>
  ,
)
