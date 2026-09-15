import React from 'react'
import { mobileData } from '../data/mobiles'
import ProductPage from './ProductPage'

const MobilePage = () => {
    return (
        <ProductPage
            data={mobileData}
            routePrefix="mobiles"
            brandField="company"
        />
    )
}

export default MobilePage