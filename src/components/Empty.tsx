import { IconEmpty } from 'assets/svg'
import React from 'react'
import styles from './empty.module.scss'

interface Props {
  text: string
}

const Empty = ({ text }: Props) => {
  return (
    <div className={styles.emptyWrap}>
      <IconEmpty className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  )
}
export default Empty
