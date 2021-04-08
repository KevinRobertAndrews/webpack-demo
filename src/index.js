import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, installed in node_modules
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());