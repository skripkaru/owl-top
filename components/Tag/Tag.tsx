import { JSX } from 'react'
import { TagProps } from './Tag.props'
import styles from './Tag.module.scss'
import cn from 'classnames'

const Tag = ({
  size = 'md',
  color = 'ghost',
  href,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md',
        [styles.ghost]: color == 'ghost',
        [styles.gray]: color == 'gray',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}

export default Tag
