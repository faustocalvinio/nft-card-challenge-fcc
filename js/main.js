const qs=(a)=>document.querySelector(a)

const imgEquilibrum=qs('.img-eq');
const imgView=qs('.container-view')
const blueBgDiv=qs('.blue-bg')
const imgEye=qs('.img-view')

imgEquilibrum.addEventListener('mouseover',()=>{
   imgView.classList.toggle('active',true);
});

imgEquilibrum.addEventListener('mouseleave',()=>{
    imgView.classList.remove('active');
})
blueBgDiv.addEventListener('mouseover',()=>{
    imgView.classList.toggle('active',true);
 });
 
blueBgDiv.addEventListener('mouseleave',()=>{
    imgView.classList.remove('active');
 })

imgEye.addEventListener('mouseover',()=>{
    imgView.classList.toggle('active',true);
 });
 
imgEye.addEventListener('mouseleave',()=>{
     imgView.classList.remove('active');
 })

