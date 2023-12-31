import { JSX } from 'react'
import Head from 'next/head'
import { withLayout } from '@/layout/Layout'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'
import { API } from '@/helpers/api'
import { firstLevelMenu } from '@/helpers/helpers'
import { ParsedUrlQuery } from 'querystring'

function Type({ firstCategory }: TypeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Owl Top</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>Type: {firstCategory}</div>
    </>
  )
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => `/${m.route}`),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type)

  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  })

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  }
}

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
