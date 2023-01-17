import { DateTime } from './luxon.js';

const now = () => {
  const time = DateTime.local();
  const date = document.querySelector('.time');
  date.innerHTML = `${time.toLocaleString(DateTime.DATETIME_SHORT)}`;
};
export default now;
