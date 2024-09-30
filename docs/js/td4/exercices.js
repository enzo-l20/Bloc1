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
