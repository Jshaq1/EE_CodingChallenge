import React from 'react'
import { useState } from 'react'
import { ProductCard } from '../barrelExport';
import '../Css/ProductCard.scss'
import { Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';


const ProductsList = ({ productsData }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const listSize = 5
    const startIndex = (currentPage - 1) * listSize
    const endIndex = startIndex + listSize
    const paginatedProducts = productsData.slice(startIndex, endIndex)
    const totalPages = Math.ceil(productsData.length / listSize)

    const handlePageChange = (event, value) => {
        setCurrentPage(value)
        // handleSetApiLimit(endIndex)
    }


    return (
        <div className='product-list-container'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} rowSpacing={10} >
                {paginatedProducts.map(product => {
                    return <Grid item xs={2} sm={4} md={4} key={product.id}>
                        <ProductCard
                            productDetails={product}
                            key={product.title}
                        />
                    </Grid>

                })}
            </Grid>
            <Pagination count={totalPages} onChange={handlePageChange} />
        </div>

    )
}

export default ProductsList