import { JSX, useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'
import cn from 'classnames'
import styles from './Menu.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '@/helpers/helpers'

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  const router = useRouter()

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }

          return m
        })
      )
  }

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevel}>
        {firstLevelMenu.map((m) => (
          <li key={m.route}>
            <Link
              href={`/${m.route}`}
              className={cn(styles.firstLevelItem, {
                [styles.firstLevelItemActive]: m.id === firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondLevel}>
        {menu.map((m) => {
          if (
            m.pages
              .map((page) => page.alias)
              .includes(router.asPath.split('/')[2])
          ) {
            m.isOpened = true
          }
          return (
            <li
              key={m._id.secondCategory}
              className={styles.secondLevelItem}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <ul className={styles.thirdLevel}>
        {pages.map((page) => (
          <li key={page._id}>
            <Link
              href={`/${route}/${page.alias}`}
              className={cn(styles.thirdLevelItem, {
                [styles.thirdLevelItemActive]:
                  `/${route}/${page.alias}` === router.asPath,
              })}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return <nav className={styles.menu}>{buildFirstLevel()}</nav>
}

export default Menu
