import { server } from '../store';
import axios from 'axios';

const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const {} = await axios.post(`${server}/login`, { email, password },{
        headers:{
            "Content-type":"application/json"
        }
    });
  } catch (error) {}
};
