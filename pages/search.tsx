import { JSX } from 'react'
import Head from 'next/head'
import { withLayout } from '@/layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'
import { API } from '@/helpers/api'

function Search(): JSX.Element {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>Search</div>
    </>
  )
}

export default withLayout(Search)

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  })

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
