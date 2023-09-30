import React from 'react'

interface Props {
    params: {productSlug: string[]}
}

const ProductDetailsPage = ( {params: {productSlug}}:Props) => {
  return (
    <div>ProductDetailsPage {productSlug} </div>
  )
}

export default ProductDetailsPage