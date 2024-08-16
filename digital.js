    let hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds");
    let body = document.querySelector("body")
    let mode = document.querySelector(".mode")
    if(localStorage.getItem("MoDe")==="dark"){
        body.classList.add("dark");
        mode.textContent="Light Mode"
    }
    mode.addEventListener("click",()=>{
        body.classList.toggle("dark");
        let isDark = body.classList.contains("dark");
        mode.textContent=isDark?"Light Mode" : "Dark Mode";
        localStorage.setItem("MoDe", isDark? "dark" : "Light")
    })
    let update = ()=> {
        let date = new Date();
        let hou = date.getHours();
        if(hou===0) {
            hours.textContent= `00`;
        }
        else if (hou < 10 && hou !== "0"){
            hours.textContent=`0${hou}`
        } else {
            hours.textContent=hou;
        }
        let min = date.getMinutes();
        if(min<10){
            minutes.textContent=`0${min}`
        }
        else {
            minutes.textContent=min ;
        }
        let sec = date.getSeconds();
        if(sec<10){
            seconds.textContent=`0${sec}`;
        }
        else {
            seconds.textContent=sec
        }
    }
    setInterval(update,1000);
    update()