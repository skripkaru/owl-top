import { FunctionComponent, JSX } from 'react'
import { LayoutProps } from '@/layout/Layout.props'
import { Footer, Header, Sidebar } from '@/components'
import styles from './Layout.module.scss'
import { AppContextProvider, IAppContext } from '@/context/app.context'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
