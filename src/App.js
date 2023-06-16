import React from 'react'
import NavBar from './NavBar'
import HeaDer from './HeaDer'
import SliDer from './SliDer'
import ViewAll from './ViewAll'
import ProDuct from './ProDuct'
import BuyMore from './BuyMore'
import ProDuct1 from './ProDuct1'
import OfferUnder from './OfferUnder'
import ProDuct3 from './ProDuct3'
import OfferUnder1 from './OfferUnder1'



export default function App() {
  return (
    <div>
      <NavBar />
      <HeaDer />
      <SliDer />
      <div className='flex mt-4 ml-3 px-5'>
      <ViewAll />
      <ProDuct />
      </div>
      <BuyMore />
      <ProDuct1 />
      <OfferUnder />
      <ProDuct3 />
      <OfferUnder1 />
    </div>
  )
}
