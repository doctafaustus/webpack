import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'lolz'], '');

  return element;
}

document.body.appendChild(component());

