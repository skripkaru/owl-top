import { JSX } from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'
import Arrow from './arrow.svg'

const Button = ({
  appearance = 'primary',
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.arrow]: arrow == 'down',
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  )
}

export default Button
