import React from 'react'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, link, data, count = 5, showTitle = true }) => {
    const firstFiveImages = data.slice(0, count)

    return (
        <>
            {showTitle && (
                <div className="proTitle">
                    <h2>{title}</h2>
                </div>
            )}
            <div className='proSection'>
                {firstFiveImages.map((item) => (
                    <div className='imgBox' key={item.id}>
                        <Link to={link}>
                            <img className='proImage' src={item.image} alt="" />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoryPreview
