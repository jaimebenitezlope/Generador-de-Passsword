import { rangeElement, buttonElement } from './dom';

import { generatePassword, updatePasswordLength } from './password-functions';

rangeElement.addEventListener('input', updatePasswordLength);
buttonElement.addEventListener('click', generatePassword);
