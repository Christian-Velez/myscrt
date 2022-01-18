import axios from 'axios';
import types from 'types/types';

const API_URL = process.env.REACT_APP_API_URL;

export const startRegisterUser = async ({
   username,
}) => {
   try {
      const { data } = await axios.post(`${API_URL}/api/user/new`, { username });
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
      type: types.setUserInfo,
      payload: userInfo,
   };
};
