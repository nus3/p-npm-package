import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './components/Button'
import './index.css'

ReactDOM.render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center gap-6 p-5">
      <Button>テストボタンだよ</Button>
    </div>
  </StrictMode>,
  document.getElementById('root'),
)
