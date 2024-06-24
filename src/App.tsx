import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Header } from './components/app-header'
import { Footer } from './components/app-footer'

export function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
