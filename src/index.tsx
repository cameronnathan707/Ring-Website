import ReactDOM from 'react-dom';

import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import { HashRouter } from 'react-router-dom';

const client = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);
