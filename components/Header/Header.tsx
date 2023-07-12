import { JSX } from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.scss'
import cn from 'classnames'

const Header = ({ className }: HeaderProps): JSX.Element => {
  return <header className={cn(styles.header, className)}>Header</header>
}

export default Header
