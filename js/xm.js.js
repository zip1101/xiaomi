{
    let imgs = document.querySelectorAll(".img_box li");
   console.log(imgs);
    let boos = document.querySelectorAll(".bxo .bo");
    let index = 0;
    function Fn() {
        index++;
        if(index==boos.length){
            index=0;
        }
        for(let i=0;i<boos.length;i++){
            boos[i].classList.remove("active");
            imgs[i].classList.remove('active');
        }
        boos[index].classList.add("active");
        imgs[index].classList.add("active");
    }
    setInterval(Fn,1000);
    /* boos.forEach(function(ele,index){
      ele.onclick=function(){
      for(let i=0;i<imgs.length;i++){
      boos[i].classList.remove("active");
      imgs[i].classList.remove("active");
      }
      this.classList.add("active");
      img[index].classList.add("active");
     }*/
// })
}








































































































































































































































































































































































































































































