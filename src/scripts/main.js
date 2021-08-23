'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');

  element.className = `notification ${type}`;

  element.style.cssText
  = `
  position:absolute; top:${posTop}px; right:
  ${posRight}px; box-sizing:content-box`;
  document.body.append(element);

  const tit = document.createElement('h2');

  tit.textContent = `${title}`;
  tit.className = 'title';

  const des = document.createElement('p');

  des.textContent = `${description}`;
  element.append(tit, des);

  setTimeout(() => {
    element.style.cssText = 'display:none';
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
