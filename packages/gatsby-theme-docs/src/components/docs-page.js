/** @jsx jsx */
import {jsx} from 'theme-ui'

// eslint-disable-next-line no-unused-vars
import React from 'react'

import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from './layout'
import TableOfContents from './table-of-contents'

const DocsPage = ({page}) => {
    return (
        <Layout>
            <h1>{page.title}</h1>
            <MDXRenderer>{page.body}</MDXRenderer>
            <p
                sx={{
                    borderTop: theme => `1px solid ${theme.colors.muted}`,
                    fontSize: 14,
                    mt: 2,
                    pt2: 2,
                }}>
                This page was updated {page.updated}
            </p>
            <TableOfContents />
        </Layout>
    )
}

export default DocsPage
