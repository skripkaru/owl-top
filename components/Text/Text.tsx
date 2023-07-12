import { JSX } from 'react'
import { TextProps } from './Text.props'
import styles from './Text.module.scss'
import cn from 'classnames'

const Text = ({
  size = 'md',
  children,
  className,
  ...props
}: TextProps): JSX.Element => {
  return (
    <p
      className={cn(styles.text, className, {
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
      })}
      {...props}
    >
      {children}
    </p>
  )
}

export default Text
