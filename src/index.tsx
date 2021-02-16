import React from 'react'
import ReactDOM from 'react-dom'
import {Cardslot} from '@/Components/Cardslot'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div>hello</div>
    <Cardslot/>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
