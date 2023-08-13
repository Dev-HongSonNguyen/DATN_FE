import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', element: <h1>Homepage</h1>
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
