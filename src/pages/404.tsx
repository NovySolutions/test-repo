import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout-components/layout'

const NotFoundPage = () => (
  <Layout>
    <section>
      <h1 style={{ textAlign: 'left', marginLeft: '0' }}>NOT FOUND</h1>
      <p>Something went wrong...</p>
      <p>The link you clicked may not exist</p>
      <Link to="/">Click here to go back to the main page</Link>
    </section>
  </Layout>
)

export default NotFoundPage
