import { NextRequest,NextResponse } from "next/server";
import axios from 'axios'

export async function GET(request:NextRequest) {
    
    const url =  `http://127.0.0.1:5001/occ/rest/v2/target/products/55118132`;
    // const url =  'https://qat1.target.com.au/rest/v2/target/products/55118132?fields=FULL';
    
    const { data } = await axios.get(url)
    console.log(data);
    console.log('Product Code:' + data.code );
    console.log('Product Url:' + data.url );

    return NextResponse.json(data);
}