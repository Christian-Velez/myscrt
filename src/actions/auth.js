import axios from 'axios';
import types from 'types/types';

const API_URL = process.env.REACT_APP_API_URL;


// REGISTER
export const startRegisterUser = async ({
   username,
}) => {
   try {
      const URL = `${API_URL}/api/user/new`;
      const { data } = await axios.post( URL , { username });
      const { savedUser, token } = data;

      const user = {
         id: savedUser.id,
         token,
         isAuthenticated: true
      };

      return user;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const setUserInfo = (userInfo) => {
   return {
      type: types.setAuth,
      payload: userInfo,
   };
};


// LOGOUT 
export const deleteUserAccont = async ({ id: userId, token}) => {
   try {
      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };

      const URL = `${API_URL}/api/user/${userId}`;
      const resp = await axios.delete(URL, config);

      if(resp.status === 204) {
         localStorage.removeItem('userAuth');
      }
   } catch(err) {
      console.log(err);
   }
};


export const logout = () => {
   return {
      type: types.logout
   };
};