import { BrowserRouter, Route, Routes as RoutesReact } from 'react-router-dom'
import Home from './pages'

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <RoutesReact>
          <Route path="/" element={<Home />} />
        </RoutesReact>
      </BrowserRouter>
    </>
  )
}
