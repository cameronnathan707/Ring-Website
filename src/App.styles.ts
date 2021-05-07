import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  background-color: #707070;
  border: 40px;
  border-style: solid;
  border-color: #707070;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 10px;
  top: 10px;
  color: black;
  background: radial-gradient(#ffffff, #707070);
  box-shadow: 0px 0px 0px 3px black;
`;
