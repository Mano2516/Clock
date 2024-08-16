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
        } else {
            hours.textContent=hou;
        }
        let min = date.getMinutes();
        minutes.textContent=min ;
        let sec = date.getSeconds();
        seconds.textContent=sec
    }
    setInterval(update,1000);
    update()