import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  Container
} from '@material-ui/core';
import{ Rating } from '@material-ui/lab'
import matresses from './mock/mattresses';
import Header from './Header';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  const [activeButtonData, setActiveButtonData] = useState(matresses[0]);

// Gets the selected mattress type
  const handleButtonClick = (activeButtonData) => {
    setActiveButtonData(activeButtonData);
  };

  //Add items to the cart - increases the cart count
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Container>
      <Header count={cartCount} />
      <div style={{ backgroundColor: '#f6f5f3', height: '100%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box p={2}>
              <img
                src={activeButtonData.imageFileName}
                alt={activeButtonData.name}
                width="100%"
                maxWidth="400px"
                height="349px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container direction="column" spacing={6}>
              <Grid item>
                <Typography variant="h4">Choose your matresses</Typography>
              </Grid>
              <Grid item>
              <Typography variant="h6">SELECT MATTRESS TYPE</Typography>
                <ButtonGroup
                  size="large"
                  color="primary"
                  aria-label="large primary button group"
                >
                  {matresses.map((props, index) => (
                   <div className="mattressTypeButton">
                     <Button
                      onClick={() => handleButtonClick(props)}
                      key={index}
                    >
                      {props.name}
                    </Button>
                    </div>
                  ))}
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} md={12} m={3}>
                <Box mx="auto" component="span"> {activeButtonData.name} Matress</Box>
                <Box component="span" pl={28}>
                  ${activeButtonData.price}
                </Box>
                <Box component="span" mb={3} borderColor="transparent">
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly value={activeButtonData.reviewRating} />
                </Box>
                <Button id='add-to-cart' md={8} className="btn-primary" onClick={handleAddToCart} p={3}>
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Home;
