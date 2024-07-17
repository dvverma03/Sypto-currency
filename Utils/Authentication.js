import axios from "axios";


export const Login = async ({email,password}) => {
  const url = `http://localhost:1234/login`;
  try {
    const profile = await axios.post(url,{
        email,password
    });
    console.log("login",profile)
  } catch (error) {
    console.error("error in get profile", error);
    throw error;
  }
};


export const Register = async (email) => {
    console.log("email", email)
    const url = `http://localhost:1234/register`;
  
    try {
      const response = await axios.post(url, {
        email
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log("register", response.data);
      return response.data;
    } catch (error) {
      console.error("error in register", error.response ? error.response.data : error.message);
      throw error;
    }
  };

export const VerificationLogin = async ({email,UserOtp}) => {
    const url = `http://localhost:1234/verify-otp-login`;
    try {
      const profile = await axios.post(url,{
          email,UserOtp
      });
      console.log("verification",profile)
    } catch (error) {
      console.error("error in get profile", error);
      throw error;
    }
  };


export const VerificationRegister = async ({email,UserOtp}) => {
    const url = `http://localhost:1234/verify-otp-register`;
    try {
      const profile = await axios.post(url,{
          email,UserOtp
      });
      console.log("verification",profile)
    } catch (error) {
      console.error("error in get profile", error);
      throw error;
    }
  };
