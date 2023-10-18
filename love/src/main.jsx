import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App'
import {fetchFunction as Dark} from './Fetch'
import { Files } from './Files'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <App fetchMethod={Dark}/>
    <Files fetchMethod={Dark}/>
  </>
)
