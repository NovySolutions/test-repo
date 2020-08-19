import React from 'react'

import styles from './css/layout.module.scss'

interface Layout {
  children: HTMLAllCollection
}

const Layout = ({ children }) => {
  return (
    <main id="layout" className={styles.layout}>
      {children}
    </main>
  )
}

export default Layout
