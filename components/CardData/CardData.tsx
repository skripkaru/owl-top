import { JSX } from 'react'
import { CardDataProps } from './CardData.props'
import styles from './CardData.module.scss'
import cn from 'classnames'
import { Card } from '@/components'
import RateIcon from './rate.svg'
import { priceRu } from '@/helpers/helpers'

const CardData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
  ...props
}: CardDataProps): JSX.Element => {
  return (
    <div className={cn(styles.container)} {...props}>
      <Card className={styles.total}>
        <span className={styles.title}>Всего вакансий</span>
        <span className={styles.count}>{count}</span>
      </Card>
      <Card className={styles.salary}>
        <div className={styles.inner}>
          <span className={styles.title}>Начальный</span>
          <span className={styles.value}>{priceRu(juniorSalary)}</span>
          <div className={styles.rate}>
            <RateIcon className={styles.fill} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div className={styles.inner}>
          <span className={styles.title}>Средний</span>
          <span className={styles.value}>{priceRu(middleSalary)}</span>
          <div className={styles.rate}>
            <RateIcon className={styles.fill} />
            <RateIcon className={styles.fill} />
            <RateIcon />
          </div>
        </div>
        <div className={styles.inner}>
          <span className={styles.title}>Профессионал</span>
          <span className={styles.value}>{priceRu(seniorSalary)}</span>
          <div className={styles.rate}>
            <RateIcon className={styles.fill} />
            <RateIcon className={styles.fill} />
            <RateIcon className={styles.fill} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardData
