import { passwordElement, passwordLengthElement, rangeElement } from './dom';
import { allowedCharacters } from './constants';

let passwordLength = rangeElement.value;

const generateRandomNumber = () => {
	const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
	return randomNumber;
};

const changeLengthText = () => {
	passwordLengthElement.textContent = `${passwordLength}`;
};

const updatePasswordLength = event => {
	passwordLength = event.target.value;
	changeLengthText();
};

const printFinalPassword = finalPassword => {
	passwordElement.value = finalPassword;
};

const generatePassword = () => {
	let finalPassword = '';
	for (let index = 0; index < passwordLength; index++) {
		const randomPosition = generateRandomNumber();
		finalPassword += allowedCharacters.charAt(randomPosition);
	}
	printFinalPassword(finalPassword);
};

export { updatePasswordLength, generatePassword };
