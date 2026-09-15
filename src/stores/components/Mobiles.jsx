
import React from 'react'

import { mobileData } from '../data/mobiles'
import CategoryPreview from './CategoryPreview'

const Mobiles = () => {
  return <CategoryPreview title="Mobiles" link="/mobiles" data={mobileData} />
}

export default Mobiles