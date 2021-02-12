/*eslint-disable */
import axios from 'axios';

export const sendMessage = async (userId) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/api/v1/users/${userId}`,
      data: {
        userId,
      },
    });
    if (res.data.status === 'success') {
      // eslint-disable-next-line no-restricted-globals
      location.assign(`/${res.data.data.user.slug}/contactInfo/sendMessage`);
    }
  } catch (err) {
    console.log('error:', err.response.data.message);
  }
};
