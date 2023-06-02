import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './style.css';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider >
        <Layout>
          <MainRoutes />
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
