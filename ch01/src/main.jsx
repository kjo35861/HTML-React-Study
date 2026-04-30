import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello, { Hi as H, Bye as B } from './Hello.jsx'


// createRoot(document.getElementById('root')).render(<div>{App()}{Hello()}{H()}{B()}</div>)
createRoot(document.getElementById('root')).render(<div>
    <App />
    <Hello />
    <H />
    <B />
</div>)
