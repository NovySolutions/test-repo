import React, { StrictMode, FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import './css-pages/index.scss'
import 'remixicon/fonts/remixicon.css'
import './css-pages/bootstrap.min.scss'

import Home from './Home'

const Index: FunctionComponent<{}> = () => (
  <StrictMode>
    <Home />
  </StrictMode>
)

export default Index