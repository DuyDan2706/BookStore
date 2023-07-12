import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { Fragment } from 'react'
import { routes } from './routes/index'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
