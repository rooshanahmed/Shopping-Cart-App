import React, {useContext} from 'react';
import Products from './Products';
import { Grid } from '@material-ui/core';
import { GlobalContext } from '../Context/GlobalContext';

const ProductList = () => {

    const {products} = useContext(GlobalContext);

    return(
        <Grid container spacing={3}>
            {products.map((e)=>(
                <Products key={e.id} product={e} id={e.id} name={e.name} price={e.price} imgUrl={e.imgUrl}/> 
            ))}
        </Grid>
    )
}
export default ProductList