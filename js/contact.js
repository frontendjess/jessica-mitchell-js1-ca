// target submit button
const submit = document.querySelector('#submit');

// target error messages
const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');

// onclick event + level 2 completed
submit.onclick = function (event) {
	event.preventDefault();
	console.log('i ran');
	const name = document.querySelector('#name').value.trim();
	const subject = document.querySelector('#subject').value;
	const email = document.querySelector('#email').value.trim();
	const address = document.querySelector('#address').value;
	if (testLen(name, 1)) {
		nameError.classList.add('hide');
		nameError.classList.remove('show');
	} else {
		nameError.classList.add('show');
		nameError.classList.remove('hide');
	}

	if (subject.length >= 10) {
		subjectError.classList.add('hide');
		subjectError.classList.remove('show');
	} else {
		subjectError.classList.add('show');
		subjectError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

	if (testLen(address, 25)) {
		addressError.classList.add('hide');
		addressError.classList.remove('show');
	} else {
		addressError.classList.add('show');
		addressError.classList.remove('hide');
	}

	const nameValue = document.querySelector('#name').value;

	if (
		testLen(name, 1) &&
		testLen(subject, 10) &&
		validateEmail(email) &&
		testLen(address, 25)
	) {
		document.querySelector('.formValidated').innerHTML += `
			Thank you ${nameValue}. We will shortly get back to you.
		`;
	}
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailVaild = emailExpression.test(emailAddy);
	return isEmailVaild;
}

function testLen(elm, len) {
	if (elm.length > len) {
		return true;
	} else {
		return false;
	}
}

// html
document.querySelector('.goback').innerHTML += `
	<p><a class="link" href="index.html">Return to main</a></p>
`;
