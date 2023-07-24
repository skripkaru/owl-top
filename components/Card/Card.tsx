import { JSX } from 'react'
import { CardProps } from './Card.props'
import styles from './Card.module.scss'
import cn from 'classnames'

const Card = ({
  color = 'white',
  className,
  children,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
