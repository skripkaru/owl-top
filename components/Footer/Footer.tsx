import { JSX } from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.scss'
import cn from 'classnames'
import { format } from 'date-fns'

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)}>
      <span>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </span>
      <a href='#'>Пользовательское соглашение</a>
      <a href='#'>Политика конфиденциальности</a>
    </footer>
  )
}

export default Footer
