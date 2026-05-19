const subTitle = document.querySelector('#subTitle');
const firstLi = document.querySelector('ul li:first-child');
const lastLi = document.querySelector('ul li:last-child');
const createList = document.querySelector('#createList');
const comboList = document.querySelector('#comboList');
const comboListOption = document.querySelectorAll('#comboList option');
const pexelsImage = document.querySelector('#pexelsImage');

console.log(document.getElementsByTagName('li'));
console.log(document.querySelectorAll('li'));

subTitle.textContent = 'Testo inserito da JavaScript';
console.log(firstLi.textContent);
lastLi.textContent += ' <b>Non sono in grassetto</b>';

createList.innerHTML =
	'<ul><li>List 1</li><li>List 1</li><li>List 1</li><li>List 1</li></ul>';

comboListOption.forEach((optionValue) => {
	console.log(optionValue.value);
	optionValue.value = 'JavaScript';
});

console.log(pexelsImage.getAttribute('src'));
// pexelsImage.setAttribute(
// 	'src',
// 	'https://images.pexels.com/photos/36090051/pexels-photo-36090051.jpeg',
// );
pexelsImage.src =
	'https://images.pexels.com/photos/36090051/pexels-photo-36090051.jpeg';
pexelsImage.setAttribute('alt', 'Immagine da Pexels');

comboList.setAttribute('disabled', 'true');

let classContain = subTitle.classList.contains('redText');

if (classContain) {
	subTitle.classList.remove('redText');
}
