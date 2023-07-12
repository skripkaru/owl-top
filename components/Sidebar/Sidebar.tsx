import { JSX } from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { Menu } from '@/components'

const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, className)}>
      <Menu />
    </div>
  )
}

export default Sidebar
