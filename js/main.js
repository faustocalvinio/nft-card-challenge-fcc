const qs=(a)=>document.querySelector(a)

const imgEquilibrum=qs('.img-eq');
const imgView=qs('.container-view')

imgEquilibrum.addEventListener('mouseover',()=>{
   imgView.classList.toggle('active',true);
});

imgEquilibrum.addEventListener('mouseleave',()=>{
    imgView.classList.remove('active');
})