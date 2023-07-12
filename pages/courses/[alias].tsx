import { JSX } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { withLayout } from '@/layout/Layout'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'
import { API } from '@/helpers/api'
import { TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import { ParsedUrlQuery } from 'querystring'

const firstCategory = 0

function Course({ products }: CourseProps): JSX.Element {
  return (
    <>
      <div>{products.length}</div>
    </>
  )
}

export default withLayout(Course)

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  })

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => '/courses/' + p.alias)),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  })

  const { data: page } = await axios.get<TopPageModel>(
    API.topPage.byAlias + params.alias
  )

  const { data: products } = await axios.post<ProductModel[]>(
    API.product.find,
    {
      category: page.category,
      limit: 10,
    }
  )

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  }
}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
  page: TopPageModel
  products: ProductModel[]
}
