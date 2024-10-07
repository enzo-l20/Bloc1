const $=(id)=>document.getElementById(id);
// bouton pour mettre le texte en gras
const gras = $('gras');
gras.addEventListener('change', ()=>{
    const texte = $('texte')
    if(gras.checked){
        texte.style.fontWeight = 'bold';
    } else{
        texte.style.fontWeight = '';
    }
});

//bouton pour mettre le texte en italique
const italique = $('italique');
italique.addEventListener('change', ()=>{
    const texte = $('texte')
    if(italique.checked){
        texte.style.fontStyle = 'italic';
    } else{
        texte.style.fontStyle = '';
    }
});

// bouton pour souligner le texte
const souligne = $('souligne');
souligne.addEventListener('change', ()=>{
    if(souligne.checked){
        texte.style.textDecoration = 'underline';
    } else{
        texte.style.textDecoration = '';
    }
});

// bouton pour barrer le texte
const barre = $('barre');
barre.addEventListener('change', ()=>{
    texte.style.textDecoration = '';

    if(barre.checked){
        texte.style.textDecoration = 'line-through';
    } 
    if(souligne.checked){
        texte.style.textDecoration += ' underline';
    }
});

//bouton pour changer la couleur
const couleur = $('couleur');
couleur.addEventListener('change',()=>{
    const couleurs = couleur.value;
    texte.style.color = couleurs;
});

//input pour changer la taille du texte
const taillepolice = $('taillepolice');
taillepolice.addEventListener('input',()=>{
    const taillepolices = taillepolice.value
    texte.style.fontSize = taillepolices + 'px';
});

//changer la police
const police = $('police');
police.addEventListener('change', ()=>{
    const polices = police.value;
    texte.style.fontFamily = polices;
});

//augmenter la taille de la police
const augmenter = $('augmenter');
augmenter.addEventListener('click',()=>{
    let taille = parseInt(texte.style.fontSize);
    texte.style.fontSize = (taille+2) + 'px';
    taillepolice.value = parseInt(texte.style.fontSize);
});

//diminuer la taille de la police
const diminuer = $('baisser');
diminuer.addEventListener('click', ()=>{
    let taille = parseInt(texte.style.fontSize);
    texte.style.fontSize = (taille-2) + 'px';
    taillepolice.value = parseInt(texte.style.fontSize);
})