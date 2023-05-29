import { GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import * as ReactDOM from 'react-dom/client';

import 'graphiql/graphiql.css';
import './main.css'

const fetcher = createGraphiQLFetcher({
  url: 'http://localhost:8080/https://api.cloudflare.com/client/v4/graphql'
});

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GraphiQL fetcher={fetcher} />);
