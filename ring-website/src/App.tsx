import { useState } from 'react';
import { useQuery } from 'react-query';

// componennts
import Drawer from '@material-ui/core/Drawer';
import LinearProgess from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import Item from './Item/Item';

// styles
import { Wrapper, StyledButton } from './App.styles';

// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  price: number;
  image: string;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  (await fetch('https://fakestoreapi.com/products')).json();

const App = (): any => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getToatalItems = (items: CartItemType[]) => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  // const handleRemoveFromCart = () => null;

  if (isLoading) {
    return <LinearProgess />;
  }
  if (error) {
    return <div>Something went wrong ... </div>;
  }

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getToatalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
