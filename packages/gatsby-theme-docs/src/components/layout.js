/** @jsx jsx */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import {jsx} from 'theme-ui'
import {Global} from '@emotion/core'

const Layout = ({children}) => (
    <>
        <Global styles={{body: {margin: 0}}} />
        <header sx={{bg: 'primary', color: 'background', fontFamily: 'heading', p: 3}}>gatsby-theme-docs</header>
        <main sx={{mx: 'auto', maxWidth: 650, width: '90vw'}}>{children}</main>
    </>
)

export default Layout
