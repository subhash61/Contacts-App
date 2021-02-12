/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const sendText = async (userId, otp) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/messages/sendOTP',
      data: {
        userId,
        otp,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'OTP sent successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1200);
    }
  } catch (err) {
    showAlert('error', 'Error sending OTP. PLease try again.');
    window.setTimeout(() => {
      location.assign('/');
    }, 1200);
  }
};
