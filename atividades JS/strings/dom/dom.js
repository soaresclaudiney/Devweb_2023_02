alert ('boas Vindas');

document.title = 'Dom Pedro';

let section1 = document.createElement('section')

let sectionh1 = document.createElement('h1')
sectionh1.textContent= 'Pedro Dom'

let sectionp1 = document.createElement('p1')
sectionp1.textContent = 'lorem dolor sit amet'

section1.appendChild(sectionh1);
section1.appendChild(sectionp1);  


let article1 = document.createElement('section')

let articleh1 = document.createElement('h2')
articleh1.textContent= 'Pedro Dom'

let articlep1 = document.createElement('p2')
articlep1.textContent = 'lorem dolor sit amet'

article1.appendChild(articleh1);
article1.appendChild(articlep1); 

document.body.appendChild(section1);
document.body.appendChild(article1);