import React from 'react'
import { kitchenData } from '../data/kitchen'
import CategoryPreview from './CategoryPreview'

const Kitchen = () => {
  return <CategoryPreview title="Kitchen" link="/kitchen" data={kitchenData} />
}

export default Kitchen