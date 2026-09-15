
import React from 'react'
import { menData } from '../data/men'
import CategoryPreview from './CategoryPreview'

const Men = () => {
  return <CategoryPreview title="Men Fashion" link="/men" data={menData} />
}

export default Men