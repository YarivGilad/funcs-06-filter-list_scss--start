import { createRoot } from 'react-dom/client'
import { App } from './view/app/app.view'
import './styles/global.styles.scss'

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />)