let screen = document.querySelector('.screen');
let allBtn = document.querySelector('.button');
let equal = document.querySelector('.equal');

allBtn.addEventListener('click',(e)=>{
   screen.innerText += e.target.innerText;
   let index;
   let nb1 ;
   let nb2 ;

   if(e.target.innerText =='='){
      if(screen.innerText.indexOf('+')!==-1){
         index = screen.innerText.indexOf("+");
         nb1 = screen.innerText.substring(0,index); // find the index of "+"
         nb2 = screen.innerText.substring(index+1); // get the substring before "+"
         screen.innerText =  parseInt(nb1)+ parseInt(nb2);
      }else if(screen.innerText.indexOf('/')!==-1){
         index = screen.innerText.indexOf("/");
         nb1 = screen.innerText.substring(0,index); // find the index of "/"
         nb2 = screen.innerText.substring(index+1); // get the substring before "/"
         screen.innerText =  parseInt(nb1)/parseInt(nb2);
      }else if(screen.innerText.indexOf('*')!==-1){
         index = screen.innerText.indexOf("*");
         nb1 = screen.innerText.substring(0,index); // find the index of "*
         nb2 = screen.innerText.substring(index+1); // get the substring before "*"
         screen.innerText =  parseInt(nb1)*parseInt(nb2);
      }else{
         index = screen.innerText.indexOf("-");
         nb1 = screen.innerText.substring(0,index); // find the index of "-"
         nb2 = screen.innerText.substring(index+1); // get the substring before "-"
         screen.innerText =  parseInt(nb1)- parseInt(nb2);
      }
    
   }

   if(e.target.innerText == 'C'){
    screen.innerText = ' ';
   }

})