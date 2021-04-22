import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');

const notify = () => {
  const options = {
    text: 'To many matches found. Please enter a more specific query!',
    mode: 'light',
    animation: 'fade',
    animateSpeed: 'slow',
    delay: 2000,
    width: '400px',
    sticker: false,
    maxTextHeight: null,
  };
  error(options);
};

export default notify;
