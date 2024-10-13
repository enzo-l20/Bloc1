const $=(id)=>document.getElementById(id);

const bt1 = $('1');
const bt2 = $('2');
const bt3 = $('3');
const bt4 = $('4');
const bt5 = $('5');
const bt6 = $('6');
const bt7 = $('7');
const bt8 = $('8');
const bt9 = $('9');

const btdivision = $('division');
const btmultiplication = $('multiplication');
const btsoustraction = $('soustraction');
const btplus = $('addition');
const btegale = $('egale');

const btvirgule = $('virgule');
const btreset = $('reset');

const ecran = $('ecran');


bt1.addEventListener('click',()=>{
    const valeur = bt1.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt2.addEventListener('click',()=>{
    const valeur = bt2.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt3.addEventListener('click',()=>{
    const valeur = bt3.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt4.addEventListener('click',()=>{
    const valeur = bt4.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt5.addEventListener('click',()=>{
    const valeur = bt5.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt6.addEventListener('click',()=>{
    const valeur = bt6.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt7.addEventListener('click',()=>{
    const valeur = bt7.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt8.addEventListener('click',()=>{
    const valeur = bt8.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

bt9.addEventListener('click',()=>{
    const valeur = bt9.value;
    if(ecran.innerText==""){
        ecran.innerText = valeur;
    } else{
        ecran.innerText += valeur;
    };
});

btdivision.addEventListener('click',()=>{
    ecran.innerHTML += '/'
})
btmultiplication.addEventListener('click',()=>{
    ecran.innerHTML += '*';
});

btsoustraction.addEventListener('click', ()=>{
    ecran.innerHTML += '-';
});

btplus.addEventListener('click',()=>{
    ecran.innerHTML += '+';
});

btvirgule.addEventListener('click', ()=>{
    ecran.innerHTML += '.';
});

btegale.addEventListener('click',()=>{
    const calcul = eval(ecran.textContent);
    ecran.textContent = calcul;
});

btreset.addEventListener('click',()=>{
    ecran.innerText = '';
});
