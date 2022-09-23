import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import { useCart } from '../../context/cart';

export default function CartList({ onUpdate }) {
  const {carts} = useCart();
  return (
    <Container>
      {carts.products.map((product) => (
        <CartItem key={product.id} product={product} onUpdate={onUpdate} />
      ))}
      <CartFooter></CartFooter>
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
