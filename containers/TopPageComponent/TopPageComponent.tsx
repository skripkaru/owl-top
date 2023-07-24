import React, { JSX, useReducer } from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.scss'
import { CardData, Sort, Tag, Title } from '@/components'
import { TopLevelCategory } from '@/interfaces/page.interface'
import Advantages from '@/components/Advantages/Advantages'
import { SortEnum } from '@/components/Sort/Sort.props'
import { sortReducer } from '@/reducers/sort.reducer'

const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  )

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort })
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.header}>
          <Title className={styles.title}>{page.title}</Title>
          {products && (
            <Tag color='gray' size='md'>
              {products.length}
            </Tag>
          )}
          <Sort sort={sort} setSort={setSort} />
        </div>

        {sortedProducts &&
          sortedProducts.map((product) => (
            <div key={product._id}>{product.title}</div>
          ))}
      </div>

      <div>
        <div className={styles.header}>
          <Title className={styles.title} tag='h2'>
            Вакансии {page.category}
          </Title>
          {products && (
            <Tag color='red' size='md'>
              hh.ru
            </Tag>
          )}
        </div>
        {page.hh && firstCategory === TopLevelCategory.Courses && (
          <CardData {...page.hh} />
        )}
      </div>

      {page.advantages && page.advantages.length > 0 && (
        <div>
          <Title tag='h2'>Преимущества</Title>
          <Advantages advantages={page.advantages} />
        </div>
      )}

      {page.seoText && (
        <div dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}

      {page.tags && (
        <div>
          <Title tag='h2'>Получаемые навыки</Title>
          <div className={styles.tags}>
            {page.tags.map((tag) => (
              <Tag key={tag} color='primary'>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TopPageComponent
