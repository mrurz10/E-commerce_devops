
import React from 'react'
import { furnitureData } from '../data/furniture'
import CategoryPreview from './CategoryPreview'

const Furniture = () => {
  return <CategoryPreview title="Furniture" link="/furniture" data={furnitureData} />
}

export default Furniture