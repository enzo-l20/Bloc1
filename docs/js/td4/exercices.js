// change la couleur du fond en rouge quand bouton cliqué
const btred = document.getElementById('btred');
btred.addEventListener("click",()=>{
    document.body.style.backgroundColor='red';
});
//change la couleur du fond en vert quand bouton cliqué
const btgreen = document.getElementById('btgreen');
btgreen.addEventListener("click", ()=>{
    document.body.style.backgroundColor='green';
});
// reset la couleur du fond quand bouton cliqué
const btreset = document.getElementById('btreset');
btreset.addEventListener("click", ()=>{
    document.body.style.backgroundColor='';
});

// ajout d'un élément dans une liste avec un bouton
const btajout = document.getElementById('btajout');
btajout.addEventListener("click",()=>{
    const texte = document.getElementById('text').value;
    if(texte !== ""){
        const li= document.createElement("li");
        li.innerText = texte;
        list.appendChild(li);
    };
});

//addition
const btplus = document.getElementById('btplus');
btplus.addEventListener("click",()=>{
    const nb1 = document.getElementById('nb1').value;
    const nb2 = document.getElementById('nb2').value;
    const resultats = document.getElementById('resultats')
    if(nb1 !=="" && nb2 !==""){
        resultats.value = parseInt(nb1) + parseInt(nb2);
    };
});

// liste deroulantes avec image
const liste = document.getElementById('deroulant');
const images = document.getElementById('imgcontainer');
liste.addEventListener('change', ()=>{
    const imgSelectionnee = liste.value;
    if (liste){
        afficherimage.src = imgSelectionnee;
        afficherimage.style.display = 'block'
    };
});

// créer une alerte lorsqu'on survole un élément
const alerte = document.getElementById('alerte');
alerte.addEventListener('mouseover', ()=>{
    window.alert('ALERTE');
});

//Horloge
function Clock(){
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let timer = heure + ' : ' + minute + ' : ' + seconde;
    document.getElementById('clock').innerHTML = timer;
};
setInterval(Clock, 1000);
Clock();

// retirer un élément de la page (ici tout le body)
const btdelete = document.getElementById('deleteElmt');
const body = document.querySelector('body');
btdelete.addEventListener('click',()=>{
    body.remove();
});

// cacher ou afficher un élément en fonction d'une case à cocher

const check = document.getElementById('check');
check.addEventListener('change', ()=>{
    const elmtcacher = document.getElementById('elmtcacher');
    if(check.checked){
            elmtcacher.style.display = 'block';
        } else{
            elmtcacher.style.display = 'none';
        }
});


//formulaire age
const btenvoie = document.getElementById('btenvoie');
btenvoie.addEventListener('click',function(evenement){
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    evenement.preventDefault();
    console.log('Nom : ', nom);
    console.log('adresse mail :' , email);
    console.log('Message : ', message);
});