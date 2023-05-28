import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Login } from './components/Login/Login';


function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
