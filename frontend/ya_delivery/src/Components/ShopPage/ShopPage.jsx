import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {  Typography, Container, Box, Paper, Button } from '@mui/material';
import CustomAppBar from "../CustomAppBar/CustomAppBar";

const getProducts = gql`
  query GetProducts($idShop: ID!) {
    GetProducts(idShop: $idShop) {
      idPriduct
      name
      cost
    }
  }
`;

const ShopPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(getProducts, {
    variables: { idShop: id },
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log(product);
    console.log(product.cost);
    setCart((prevCart) => ({
      ...prevCart,
      [JSON.stringify(product)]: (prevCart[JSON.stringify(product)] || 0) + 1,
    }));
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[JSON.stringify(product)] > 0) {
        newCart[JSON.stringify(product)] -= 1;
        if (newCart[JSON.stringify(product)] === 0) {
          delete newCart[JSON.stringify(product)];
        }
      }
      return newCart;
    });
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <div>
      <CustomAppBar position="static">
      </CustomAppBar>
      
      <Container sx={{ marginTop: 10 , width: 500}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#333",
              borderRadius: 2,
              padding: 2,
              width: "50%",
            }}
          >
            <Typography  variant="h4" color="white" gutterBottom>
              Products:
            </Typography>
            <Box
              sx={{
                width: "100%",
                listStyleType: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {data.GetProducts.map((product) => (
                <Paper
                  key={product.idPriduct}
                  sx={{
                    backgroundColor: "#444",
                    borderRadius: 2,
                    margin: "10px 0",
                    padding: 2,
                    color: "#FFF",
                  }}
                >
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography>Cost: {product.cost}</Typography>
                  <Box sx={{ display: "flex", marginTop: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove from Cart
                    </Button>
                  </Box>
                  <Typography sx={{ marginTop: 1 }}>
                    Quantity: {cart[JSON.stringify(product)] || 0}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ShopPage;
