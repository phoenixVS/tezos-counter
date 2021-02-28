import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"

import s from '../styles/Home.module.scss'

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage : React.FC<PageProps<DataProps>> = ({ data, path }) => (  
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Gatsby tezos counter</h1>
    <button type="button" className={s.button}>+</button>
    <button type="button" className={s.button}>-</button>

    <p>Page built on {data.site.buildTime}.</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`