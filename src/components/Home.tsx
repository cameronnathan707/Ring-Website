import { Wrapper } from './components.styles';
import logo from './homeImage.png'


import { withRouter } from 'react-router-dom';
function Home() {
  return (
    <Wrapper>
      <img src={logo}/>;
    </Wrapper>
  );
}

export default withRouter(Home);
