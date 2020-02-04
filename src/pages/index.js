import React from "react"
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={['gatsby', 'globalcss', 'issue']} />
    <Container>
      <Row noGutters>
        <Col xs={12} md={6} lg={8}>
          <div>
            <h1>Hi, I'm a Gatsby Issue.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
