let
hour = document.querySelector(".hour"),
minute = document.querySelector(".minutes"),
second = document.querySelector(".seconds");
body = document.querySelector("body"),
mode = document.querySelector(".mode");
    if(localStorage.getItem("MODE")==="Dark"){
        body.classList.add("dark");
        mode.textContent="Light Mode"
    }
mode.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    let isDark = body.classList.contains("dark");
    mode.textContent= isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("MODE",isDark?"Dark":"Light")
})
let update = () => {
    let date = new Date();
    let sec = (date.getSeconds() /60)*360,
    min = (date.getMinutes() /60)*360,
    hou = (date.getHours()/ 12) *360;
    hour.style.transform = `rotate(${hou}deg)`;
    minute.style.transform = `rotate(${min}deg)`;
    second.style.transform= `rotate(${sec}deg)`;
}
setInterval(update ,1000)
update();