import React from 'react'
import axios from 'axios'


interface Props {
    params: {productSlug: string[]}
    searchParams: {sortOrder: string}
}

const ProductDetailsPage = async ( {params: {productSlug},searchParams: {sortOrder}}:Props) => {

  console.log(productSlug);
  const url =  `http://127.0.0.1:5001/occ/rest/v2/target/products/${productSlug}`;


  try {
		const { data } = await axios.get(url)
    console.log(data);

	} catch (error) { 
    console.log(error)
  }
  
  return (
    <div>ProductDetailsPage {productSlug}</div>
  )
}



export default ProductDetailsPage