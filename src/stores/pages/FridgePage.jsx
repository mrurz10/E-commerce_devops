import React from 'react'
import { fridgeData } from '../data/fridge'
import ProductPage from './ProductPage'

const FridgePage = () => {
    return (
        <ProductPage
            data={fridgeData}
            routePrefix="fridge"
            brandField="brand"
        />
    )
}

export default FridgePage