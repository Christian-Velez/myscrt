import axios from 'axios';
import types from 'types/types';

const API_URL = process.env.REACT_APP_API_URL;

export const startRegisterUser = async ({
   username,
   dispatch,
   navigate,
   setIsLoading,
}) => {
   try {
      setIsLoading(true);
      const { data } = await axios.post(`${API_URL}/api/user/new`, { username });

      const { savedUser, token } = data;

      const user = {
         id: savedUser.id,
         token,
         isAuthenticated: true
      };

      // Guardo la cuenta en la sesion y en el localStorage
      dispatch(setUserInfo(user));
      localStorage.setItem('userAuth', JSON.stringify(user));


      setIsLoading(false);
      navigate(`./${savedUser.id}`);
   } catch (err) {
      return err;
   }
};

export const setUserInfo = (userInfo) => {
   return {
      type: types.setUserInfo,
      payload: userInfo,
   };
};
