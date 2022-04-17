// @ts-ignore
import React,{ FC } from 'react'
import "../style/index.scss"
import Header from "./header";
import Coffin from './coffin'
import Coffin2 from './coffin2'
import Rarity from "./rarity";
import Faq from './faq'
import Team from './team'
import Footer from './footer'

interface IndexProps {
}

const Index: FC<IndexProps> = props => {
  const {
  }=props
  return (
    <>
      <Header />
      <Coffin />
      <Coffin2 />
      <Rarity />
      <Faq />
      <Team />
      <Footer />
    </>

  )
}

export default Index;