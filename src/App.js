import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from 'store/StoreProvider';
import theme from 'theme';
import AppRouter from './router/AppRouter';

const App = () => {
   return (
      <BrowserRouter>
         <ChakraProvider theme={theme}>
            <StoreProvider>
               <AppRouter />

            </StoreProvider>
         </ChakraProvider>
      </BrowserRouter>
   );
};

export default App;
