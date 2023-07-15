import { JSX } from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { Menu } from '@/components'
import Logo from '@/layout/logo.svg'
import Link from 'next/link'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <Link href='/' className={styles.logo}>
        <Logo />
      </Link>
      <div>Search</div>
      <Menu />
    </div>
  )
}

export default Sidebar
