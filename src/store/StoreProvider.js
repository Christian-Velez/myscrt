
import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import storeReducer, { initialStore } from './storeReducer';

const StoreContext = createContext();
const StoreProvider = ({children}) => {

   const [store, dispatch] = useReducer(storeReducer, initialStore);

   return (
      <StoreContext.Provider value={[store, dispatch]}>
         { children }
      </StoreContext.Provider>
   );
};




StoreProvider.propTypes = {
   children: PropTypes.element
}; 


export { StoreContext };
export default StoreProvider;