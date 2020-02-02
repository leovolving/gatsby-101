import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from '@emotion/styled'

const ConfWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0 autio 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Description = styled.div`
  flex: 1;
  msrgin-left: 18px;
  padding: 12px;
`

const EventName = styled.h3`
  margin: 0 0 12px 0;
  padding: 0;
`

const EventDate = styled.p`
  margin: 0;
`

const Conference = props => (
  <ConfWrapper>
    <Description>
      <EventName>{props.eventName}</EventName>
      <EventDate>{props.eventDate}</EventDate>
    </Description>
  </ConfWrapper>
)

const Speaking = () => (
  <Layout>
    <SEO title="Speaking" />
    <h2>Speaking Engagements</h2>
    <Conference eventName={'A11yTo'} eventDate={'October 2020'} />
    <Conference eventName={'Something else'} eventDate={'October 2020'} />
  </Layout>
)

export default Speaking
