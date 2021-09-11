import React from 'react';
import './styles/HomeStyle.css'
import {Container,Button, AppBar} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Home = () => {
    return (
        <div>
            <AppBar backgr>
            <ShoppingCartIcon color='secondary' fontSize='large'/>
            </AppBar>


            
            
            <h1>Home Component</h1>
            <Container >
            <div className="cart-wrapper">
                <div className="img-sec">
                    <img src="https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g9-plus-1.jpg" alt="" />
                </div>
                <div className="text-sec">
                    <h4>Motorolla G9 Plus</h4>
                    <p>Price: 24000 PKR</p>
                    <Button size='small' variant='contained' color='primary'>Add To Cart</Button>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Home;