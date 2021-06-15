import { Wrapper } from './components.styles';
import { Heading } from './components.styles';
import { Title } from './components.styles';

import { withRouter } from 'react-router-dom';

function Contact() {
  return (
    <Wrapper>
      <Title> Contact</Title>
      <Heading>You can find me on Instagram: @Nathan.Cameron.Creations</Heading>
      <Heading>
        Or contact me through email at: nathan.cameron.creations@gmail.com
      </Heading>
    </Wrapper>
  );
}

export default withRouter(Contact);
