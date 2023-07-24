import { JSX } from 'react'
import { TitleProps } from './Title.props'
import styles from './Title.module.scss'
import cn from 'classnames'

const Title = ({
  tag = 'h1',
  children,
  className,
  ...props
}: TitleProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(styles.h1, className)} {...props}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={cn(styles.h2, className)} {...props}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={cn(styles.h3, className)} {...props}>
          {children}
        </h3>
      )
    default:
      return <></>
  }
}

export default Title
