import React from 'react'

interface Props {
    params: {productSlug: string[]}
    searchParams: {sortOrder: string}
}

const ProductDetailsPage = ( {params: {productSlug},searchParams: {sortOrder}}:Props) => {
  return (
    <div>ProductDetailsPage {productSlug} SortOrder: {sortOrder} </div>
  )
}

export default ProductDetailsPage