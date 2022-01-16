


import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { StoreContext } from 'store/StoreProvider';

const PublicRouter = ({ children }) => {

   const [ state ] = useContext(StoreContext);
   const { isAuthenticated, id } = state.userInfo;


   if(isAuthenticated) {
      return <Navigate to={`/${id}`} />;
   }

   return (
      children
   );
};

PublicRouter.propTypes = {
   children: PropTypes.element
};

export default PublicRouter;
