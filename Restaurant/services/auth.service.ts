import axiosInstance from './index';
import {RegisterResponse} from './types/api';

export const registerUser = async (
  formData: FormData,
): Promise<RegisterResponse> => {
  const response = await axiosInstance.post<RegisterResponse>(
    '/auth/register',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};
export const verifyOtp = async (
  email: string,
  otp: string,
  passwordReset: boolean = false,
) => {
  try {
    const response = await axiosInstance.post('/auth/verify-otp', {
      email,
      otp,
      passwordReset,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Invalid OTP or expired';
  }
};

export const resendOtp = async (
  email: string,
  passwordReset: boolean = false,
) => {
  try {
    const response = await axiosInstance.post('/auth/resend-otp', {
      email,
      passwordReset,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Error resending OTP';
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', {email, password});
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Invalid credentials';
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await axiosInstance.post('/auth/forgot-password', {email});
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Error sending password reset OTP';
  }
};

export const resetPassword = async (email: string, newPassword: string) => {
  try {
    const response = await axiosInstance.post('/auth/reset-password', {
      email,
      newPassword,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Error resetting password';
  }
};

export const me = async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Error Fetching Current User';
  }
};

export const changePassword = async (newPassword: string, email: string) => {
  try {
    const response = await axiosInstance.post('/auth/change-password', {
      newPassword,
      email
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Failed to change password';
  }
};
