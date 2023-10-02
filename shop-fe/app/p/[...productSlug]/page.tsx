import React from 'react'
import axios from 'axios'
import productService, { Product } from '@/app/services/productService'


interface Props {
    params: {productSlug: string[]}
    searchParams: {sortOrder: string}
}

const ProductDetailsPage = async ( {params: {productSlug},searchParams: {sortOrder}}:Props) => {

  const product = await productService.getProduct(productSlug[0]);
  console.log(product.code)
  console.log(product.name)
  console.log(product.url)

  return (
    <div>{product.name}</div>
  )
}


export default ProductDetailsPage