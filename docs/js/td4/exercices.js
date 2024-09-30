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