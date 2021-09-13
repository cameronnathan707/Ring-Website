import { Wrapper } from './components.styles';
import logo from './homeImage.png';

import { withRouter } from 'react-router-dom';
function Home() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" width="100%" height="100%" />
    </Wrapper>
  );
}

export default withRouter(Home);
