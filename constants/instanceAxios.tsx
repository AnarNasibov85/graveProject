import axios from 'axios';
import axiosRetry from 'axios-retry';
const baseURL = 'https://gravespanel.com/api';

const instanceAxios = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


// Token  interceptor
instanceAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    // console.log('Request Config:', config);
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Register Type
export type FormRegister = {
  email?: string;
  password?: string;
  password_confirmation?: string;
  name?: string;
  surname?:string;
};

// Login Type
export type FormLogin = {
  email?: string;
  password?: string;
};
// order type

export type OrderData={
  grave_id?:string;
  service_id?:string;
}
export async function CreateOrder(orderData: OrderData) {
  try {
    const response = await instanceAxios.post('/order', orderData);
    return response
  } catch (error) {
    console.error('Order creation error:', error);
    throw new Error('Failed to create order!');
  }
}

export async function ServicesGrave(id: string) {
  try {
    const response = await instanceAxios.get(`/services?grave_id=${id}`);
    return response.data.data;
  } catch (error) {
    console.error('services grave:', error);
    throw new Error('Failed to create order!');
  }
}


// Register 
export async function Register1(form: FormRegister) {
  try {
    const response = await instanceAxios.post('/register', form);
    return response.data; 
  } catch (error) {
    console.error('Register error:', error);
    throw new Error('Check your registration information!');
  }
}

// Login
export async function Login1(form: FormLogin) {
    try {
      const response = await instanceAxios.post('/login', form);
      const token = response?.data.token; 
  
      if (token) {
        localStorage.setItem('authToken', token);
        return response.data;
      } else {
        throw new Error('Token not received.');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Check your login information!');
    }
  }

  // logout
  export async function Logout() {
    try{
      await instanceAxios.post('/logout')    
      localStorage.removeItem('authToken')
    }catch (error) {
        console.error('Logout error:', error);
        throw new Error('Failed to log out.');
    }
  }
  
// Search 
export async function Search1(searchQuery: string) {
    try {
        const encodedQuery = encodeURIComponent(searchQuery);
        const response = await instanceAxios.get(`/graves?name=${encodedQuery}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Search error:', error);
        throw new Error('Search failed!');
    }
}


// Services
// export async function Services1() {
//     try {
//       const response = await instanceAxios.get('/services');
//       // console.log(response.data); 
  
//       return response.data.data; 
//     } catch (error) {
//       console.error('Search error:', error);
//       throw new Error('Search failed!');
//     }
//   }
  
// reset password

export async function PasswordReset(email:string) {
  try {
    const response=await instanceAxios.post('/password/forgot',{email})
    return response.data
  } catch (error) {
    console.error('Password reset error:', error);
    throw new Error('Failed to send password reset link.');
  }
}