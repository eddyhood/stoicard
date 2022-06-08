'use strict';

import '../css/style.css';
import smallLogo from '../img/stoicard-logo-small.png';

const logoContainer = document.getElementById('logo');
const logo = new Image();
logo.src = smallLogo;
logoContainer.appendChild(logo);