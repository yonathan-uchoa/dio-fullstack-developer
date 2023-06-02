import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './style.css';
import { createLocalStorage, getLocalStorage } from './services/storage';
import { AppContextProvider } from './components/AppContext';


function App() {
  !getLocalStorage('user') && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider >
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
