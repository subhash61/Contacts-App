/*eslint-disable */
import '@babel/polyfill';
import { details } from './details';
import { sendMessage } from './sendMessage';
import { sendText } from './sendText';

const moreDetailsBtn = document.querySelectorAll('.more__details');
const sendMessageBtn = document.querySelector('.contact__send--btn');
const conactListBtn = document.querySelector('.sidebar__btn--1');
const messageSentBtn = document.querySelector('.sidebar__btn--2');
const contactListBloc = document.querySelector('.overview__content--messages');
const messageSentBloc = document.querySelector('.overview__content--block');
const sendTextBtn = document.querySelector('.send__text');

if (moreDetailsBtn) {
  moreDetailsBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const { userId } = e.target.dataset;
      details(userId);
    });
  });
}

if (sendMessageBtn) {
  sendMessageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const { userId } = e.target.dataset;
    sendMessage(userId);
  });
}
if (conactListBtn) {
  conactListBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactListBloc.classList.add('hidden');
    messageSentBloc.classList.add('hidden');
    contactListBloc.classList.remove('hidden');
    conactListBtn.classList.remove('active');
    messageSentBtn.classList.remove('active');
    conactListBtn.classList.add('active');
  });
}
if (messageSentBtn) {
  messageSentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactListBloc.classList.add('hidden');
    messageSentBloc.classList.add('hidden');
    messageSentBloc.classList.remove('hidden');
    conactListBtn.classList.remove('active');
    messageSentBtn.classList.remove('active');
    messageSentBtn.classList.add('active');
  });
}
if (sendTextBtn) {
  sendTextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const { userId } = e.target.dataset;
    const { otp } = document.querySelector('.textarea').dataset;
    sendText(userId, otp);
    sendTextBtn.textContent = 'processing...';
  });
}
