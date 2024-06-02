import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Paper, Button } from '@mui/material';
import CustomAppBar from "../CustomAppBar/CustomAppBar";

const Cart = () => {
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

  const getTotalCost = () => {
    let total = 0;
    Object.keys(cart).map((key) => {
      total += JSON.parse(key).cost * cart[key];
      return total;
    });
    return total;
  };

const checkoutCart = () => {
  alert("Заказ оформлен");
  localStorage.removeItem('cart');
  setCart({});
};

return (
    <div>
      <CustomAppBar position="static" />

      <Container sx={{ marginTop: 10, width: 500 }}>
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
            <Typography variant="h4" color="white" gutterBottom>
              Cart:
            </Typography>
            <Box
              sx={{
                width: "100%",
                listStyleType: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {Object.keys(cart).map((key) => {
                const product = JSON.parse(key); // Распарсить ключ в объект
                return (
                  <Paper
                    key={product.id} // Используйте product.id в качестве ключа
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
                    <Typography>Quantity: {cart[key]}</Typography> {/* Используйте key для доступа к значению в корзине */}
                    <Typography>Total: {product.cost * cart[key]}</Typography> {/* Вычислить общую стоимость */}
                    <Box sx={{ display: "flex", marginTop: 1 }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ marginRight: 1 }}
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from Cart
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Paper>
                );
              })}
            </Box>
            <Typography variant="h6" sx={{ marginTop: 2 }}>Total Cart Cost: {getTotalCost()}</Typography>
            <Button
              onClick = {() => checkoutCart()}
              variant="contained"
              sx={{ marginTop: 2, backgroundColor: "#4caf50", color: "#FFF" }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
