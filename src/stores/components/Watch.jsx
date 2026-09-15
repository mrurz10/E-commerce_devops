import React from 'react'
import { watchData } from '../data/watch'
import CategoryPreview from './CategoryPreview'

const Watch = () => {
  return <CategoryPreview title="Watches" link="/watch" data={watchData} showTitle={false} />
}

export default Watch