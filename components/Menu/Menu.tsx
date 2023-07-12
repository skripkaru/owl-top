import { JSX, useContext } from 'react'
import { AppContext } from '@/context/app.context'

const Menu = (): JSX.Element => {
  const { menu } = useContext(AppContext)

  return (
    <ul>
      {menu.map((item) => (
        <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
      ))}
    </ul>
  )
}

export default Menu
