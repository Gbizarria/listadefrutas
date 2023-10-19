const tagImg=document.createElement('img');
tagImg.src="asset/img/278d37ff4fca52036d9e8250e4bd4933d25e8da91b001f5492f01bc0ec80d512.png"
tagImg.alt='Imagem logotipo'

window.document.querySelector('.container').appendChild(tagImg);
// logo da empresa

const tagDiv=document.createElement('div')
tagDiv.className='frutas'
document.querySelector('.container').appendChild(tagDiv)


const frutasBanana=document.createElement('p');
const frutasMorango=document.createElement('p');
const frutasGoiaba=document.createElement('p');
const frutasPessego=document.createElement('p');


frutasBanana.innerHTML='Banana'
frutasMorango.innerText='Morango'
frutasGoiaba.innerText='Goiaba'
frutasPessego.innerText='Pêssego'

document.querySelector('.frutas').appendChild(frutasBanana);
document.querySelector('.frutas').appendChild(frutasGoiaba);
document.querySelector('.frutas').appendChild(frutasMorango);
document.querySelector('.frutas').appendChild(frutasPessego);


const tagsP=document.getElementsByTagName('p');
for(let evento of tagsP){
   
evento.addEventListener('mousedown',function(){
    this.style.transform='scale(99%)'
    
    
})
evento.addEventListener('mouseup',function(){
    this.style.transform='scale(100%)'

})

}
    
 


