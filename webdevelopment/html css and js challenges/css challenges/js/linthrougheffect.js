const text=document.getElementById("text");
const textArr=text.innerText.split('');

const newEL=document.createElement('h1');
newEL.innerHTML=`
${textArr.map(letter => `
<span>${letter}</span>
`)}

`;
document.body.appendChild(newEL);