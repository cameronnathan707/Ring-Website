import { Wrapper } from './components.styles';
import { Heading } from './components.styles';
import { Title } from './components.styles';

import { withRouter } from 'react-router-dom';
function customizer() {
  return (
    <Wrapper>
      <Title>Ring Customizer</Title>
      <Heading>
        In the future you will be able to order a custom ring through this page!
      </Heading>
    </Wrapper>
  );
}

export default withRouter(customizer);
