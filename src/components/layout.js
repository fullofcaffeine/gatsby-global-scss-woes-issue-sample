/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Button, Nav } from "react-bootstrap"
import clsx from 'clsx';

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar pageInfo={pageInfo} />
        <div className={clsx('main', pageInfo && pageInfo.pageName, 'mt-4')}>
          <Row>
            <Col>
              <main>{children}</main>
            </Col>
          </Row>
       </div>
       <Container className='mt-4'>
          <footer>
            <Row>
              <Col xs={12} className='d-flex align-items-center footer__social justify-content-end'>
              </Col>
            </Row>
          </footer> 
        </Container>
      </>
    )}
  />
)

export default Layout
