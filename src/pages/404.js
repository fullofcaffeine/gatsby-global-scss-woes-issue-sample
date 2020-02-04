import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { MdEmail } from 'react-icons/md';
import { Row, Container, Col, Button } from 'react-bootstrap';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <Row className='dark-bg' style={{height: '80vh'}}>
        <Col xs={12} className='text-center d-flex align-items-center flex-column justify-content-center'>
          <h1>404</h1>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <p>Didn't find what you were looking for here?</p>
        <Button href='mailto:hello@fullofcaffeine.co' className='d-flex align-items-center talk-btn mt-2' variant='primary'><MdEmail />&nbsp;&nbsp;Let's talk!</Button>
        </Col>
      </Row>
 </Layout>
)

export default NotFoundPage
