import ReactDOM from 'react-dom'
import './index.css'
import App from './App.tsx'
import { store } from './app/store.tsx'
import { Provider } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)