// Write your code here!
document.addEventListener('DOMContentLoaded', () => {
        const mainNode = document.querySelector('main#main');
        mainNode.remove(); 
        const main = document.querySelector('main#main');
main.remove();

const headerNode = document.querySelector('h1');
console.log(mainNode);
  console.log(headerNode);
});
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Lindzdogg is the champion';
document.body.appendChild(newHeader);