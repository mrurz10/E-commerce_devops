import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ProductPage = ({ data, routePrefix, brandField = 'brand' }) => {
    const [selectedBrands, setSelectedBrands] = useState([])

    const brandHandler = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((item) => item !== brand))
        } else {
            setSelectedBrands([...selectedBrands, brand])
        }
    }

    const filteredProduct = selectedBrands.length === 0
        ? data
        : data.filter((item) => selectedBrands.includes(item[brandField]))

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {data.map((item) => (
                        <div className='pro-input' key={item[brandField]}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(item[brandField])}
                                    onChange={() => brandHandler(item[brandField])}
                                />
                                {item[brandField]}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/${routePrefix}/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className="proModel">
                                {item[brandField]}, {item.model}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductPage
