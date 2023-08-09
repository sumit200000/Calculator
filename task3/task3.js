function clear_screen()
{
    document.getElementById("inputoutput_box").value="";
}
function click_on(value)
{
    var a = value;
    document.getElementById("inputoutput_box").value += a;
}
function calculation()
{
    var a=document.getElementById("inputoutput_box").value;
    var b=eval(a);
    document.getElementById("inputoutput_box").value=b;
}
function back()
{
    var a = document.getElementById("inputoutput_box");
    a.value=a.value.slice(0,-1) ;
}

//dark mode//
const toggle = document.getElementById("checkbox");
const body =document.querySelector('body');

toggle.addEventListener('click', function(){
   this.classList.toggle('dark-mode');
   if(this.classList.toggle('checkbox1')){
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
   }
   else{
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s';
   }
    
})
