import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import { MiddleHeader } from './MiddleHeader/MiddleHeader'
import BottomHeader from './BottomHeader/BottomHeader'

 const Header = () => {
  return (
   <header>
    <TopHeader/>
    <MiddleHeader/>
    <BottomHeader/>
   </header>
  )
}
export default Header