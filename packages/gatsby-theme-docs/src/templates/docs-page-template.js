// only work when onCreatePage API run

import React from 'react'
import {graphql} from 'gatsby'
import DocsPage from '../components/docs-page'

// query has to be exported

export const query = graphql`
    query MyQuery($pageID: String!) {
        docsPage(id: {eq: $pageID}) {
            title
            updated(fromNow: true)
            body
        }
    }
`
const DocsPageTemplate = ({data}) => {
    return <DocsPage page={data.docsPage} />
}

export default DocsPageTemplate
