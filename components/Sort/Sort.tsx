import { JSX } from 'react'
import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.scss'
import SortIcon from './sort.svg'
import cn from 'classnames'

const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button
        className={cn(styles.item, {
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={styles.icon} />
        По рейтингу
      </button>
      <button
        className={cn(styles.item, {
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={styles.icon} />
        По цене
      </button>
    </div>
  )
}

export default Sort
