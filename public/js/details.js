/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line node/no-unsupported-features/es-syntax
export const details = async (userId) => {
  console.log('details');
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
      location.assign('/contactInfo');
    }
  } catch (err) {
    console.log('error:', err.response.data.message);
  }
};
