import axios from 'axios';
import types from 'types/types';


const API_URL = process.env.REACT_APP_API_URL;

export const startRegisterUser = async (username, dispatch, navigate) => {
   try {
      console.log(API_URL);


      
      const { data } = await axios.post(`${API_URL}/api/user/new`, {
         username
      });

      
      const { savedUser, token } = data;
      dispatch(setUserInfo({
         ...savedUser,
         token
      }));

      const userForLocalStorage = {
         id: savedUser.id,
         token,
         isAuthenticated: true,
      };

      localStorage.setItem('userAuth', JSON.stringify(userForLocalStorage));
      navigate(`./${savedUser.id}`);
   }
   catch(err) {
      return err;
   }
};

export const setUserInfo = (userInfo) => {
   return {
      type: types.setUserInfo,
      payload: userInfo
   };
};