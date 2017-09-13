import _ from 'lodash';
// import 'sanitize';
import './style.css';
import 'bootstrap';

  function component() {
    var element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());