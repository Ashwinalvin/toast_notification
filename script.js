const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener('click',createNotification);
function createNotification()
{
    const notif = document.createElement('div');
    //her we have a new division called notify
    notif.classList.add('toast');
    //the class name of notif division is toast remember
    //it is like <div class="toast"></div>
    notif.innerText="crazy challange"
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove();


    },3000);


}