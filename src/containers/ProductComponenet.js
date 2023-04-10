import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductComponenet = () => {
    const products = useSelector((state) => state.allProducts.products)
    let renderList = products?.map((product) => {
        const { id, title, category, image, price } = product
        return (
            <div className=' six-column wide' style={{marginTop:20}}  key={id}>
                <Link to={`/product/${id}`}>
                <div className='ui cards'>
                    <div className='card'>
                        <div className='image'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>${price}</div>
                            <div className='meta'>{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    });
    return (<>
        {renderList}
    </>)

}

export default ProductComponenet
