import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <ToastContainer />
    </ApolloProvider>
  );


}

export default MyApp
