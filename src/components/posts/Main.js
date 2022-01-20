


import React, { useContext } from 'react';
import { StoreContext } from 'store/StoreProvider';
import SendComment from './SendComment';
import ShareLink from './ShareLink';

const Main = () => {
   const [ store ] = useContext(StoreContext);

   const { currentUser, auth } = store;
   const isMyFeed = currentUser.id === auth.id;

   return (

      isMyFeed
      ? <ShareLink />
      : <SendComment />
   );
};

export default Main;
