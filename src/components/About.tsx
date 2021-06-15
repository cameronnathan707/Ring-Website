import { Wrapper } from './components.styles';
import { Heading } from './components.styles';
import { Title } from './components.styles';

import { withRouter } from 'react-router-dom';
function About() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Heading>Hi, I'm Nathan</Heading>
    </Wrapper>
  );
}
export default withRouter(About);
