import React from 'react'
import { AdvantagesProps } from './Advantages.props'
import styles from './Advantages.module.scss'
import CheckIcon from './check.svg'

const Advantages = ({ advantages }: AdvantagesProps) => {
  return (
    <>
      {advantages.map((item) => (
        <div key={item._id} className={styles.advantage}>
          <CheckIcon />
          <span className={styles.title}>{item.title}</span>
          {item.description && (
            <>
              <hr className={styles.line} />
              <p className={styles.description}>{item.description}</p>
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default Advantages
