/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line node/no-unsupported-features/es-syntax
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line node/no-unsupported-features/es-syntax
// eslint-disable-next-line node/no-missing-import
import '@babel/polyfill';
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { details } from './details';

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef
const moreDetailsBtn = document.querySelector('.more__details');

if (moreDetailsBtn) {
  moreDetailsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const { userId } = e.target.dataset;
    details(userId);
  });
}
