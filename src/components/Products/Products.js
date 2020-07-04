import React, { useContext, useState } from 'react';
import { CardActionArea, CardContent, CardActions, Button, CardMedia, Typography, Card, Grid } from '@material-ui/core';
import { GlobalContext } from '../Context/GlobalContext';


function Products({product,id,name,price,imgUrl}) {

    const {addItem,cart,plus} = useContext(GlobalContext);
    const [btnText , setBtnText] = useState('ADD_TO_CART');


    const addToCart = () => {
        if(cart.find((e) => e.id===product.id)){

            plus(id)
        }

        else{
            product.quantity = 1
            addItem({product});
            setBtnText('ADD MORE');
        }
    };
}