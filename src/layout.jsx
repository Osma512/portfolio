import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Contact from './components/Contact/Contact'
const layout = () => {
  return (
    <>
      <Header/>
<Outlet/>
<Contact/>
    </>
  )
}

export default layout
