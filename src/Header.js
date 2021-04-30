import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = (props) => (
  <Grid container>
    <Grid item xs={6}>
        <Box p={3}>
          <Typography variant="h5" align="left">
            Saatva
          </Typography>
        </Box>
    </Grid>
    <Grid item xs={6}>
      <Box display="flex" flexDirection="row" pt={2} pl={60}>
        <Box>
          <ShoppingCartOutlinedIcon />
        </Box>
        <Box component="span">{props.count}</Box>
      </Box>
    </Grid>
  </Grid>
);

export default Header;
