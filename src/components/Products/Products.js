import React, { useContext, useState } from 'react';
import { CardActionArea, CardContent, CardActions, Button, CardMedia, Typography, Card, Grid } from '@material-ui/core';
import { GlobalContext } from '../Context/GlobalContext';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0,
    },
    card: {
      maxWidth: 345,
    },
    img: {
      width: "250px",
      margin: "0 auto",
    },
    btn: {
      backgroundColor: "black",
      color: "#fff",
      width: "100%",
      padding: "10px",
    },
    action: {
      backgroundColor: "grey",
      width: "100%",
    },
  }));


function Products({product,id,name,price,imgUrl}) {

    const styles = useStyles();

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

        return (
            <>
              <Grid xs={12} sm={5} md={3} item>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.img}
                      component="img"
                      alt="Mobile Zone"
                      height="200"
                      image={imgUrl}
                      title="Mobile Zone"
                    />
                    <CardContent>
                      <Typography noWrap gutterBottom variant="h5" component="h2">
                        {name}
                      </Typography>
                      <Typography
                        align="justify"
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Now shop for the smart one!!
                      </Typography>
                    </CardContent>
                    <CardContent className={styles.root}>
                      <Typography variant={"h6"} align="center">
                        PRICE
                      </Typography>
                      <Typography align="center">Rs.{price} </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div className={styles.action}>
                      <Button
                        onClick={addToCart}
                        className={styles.btn}
                        size="small"
                        color="primary"
                      >
                        {btnText}
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            </>
        )
    };
}
export default Products