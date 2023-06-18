let adate;
let mdate;
let time;
const options={year:'numeric' ,month:'long', day:'numeric',weekday:'long'};
function showtime() {
    adate = new Date();
    mdate = adate.toLocaleDateString(undefined,options);
    document.getElementById('date').innerHTML = mdate;
    time = adate.getHours() + ':' + adate.getMinutes() + ':' + adate.getSeconds();
    document.getElementById('time').innerHTML = time;
}
setInterval(showtime, 1000);


berger=document.querySelector('.berger');
navbar=document.querySelector('.navbar');
ahead=document.querySelector('.ahead');
berger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class');
    ahead.classList.toggle('h-nav');
})