const startBtn = document.querySelector('.start');
const stopWatch = document.querySelector('.stopwatch');

const pauzaBtn = document.querySelector('.pauza');

const stopBtn = document.querySelector('.stop');
const time = document.querySelector('.time');

const archivesBtn = document.querySelector('.history');
const timeList = document.querySelector('.time-list');

const resetBtn = document.querySelector('.reset');

const info = document.querySelector('.info');
const closeBtn = document.querySelector('.close');

const blueColor = document.querySelector('.blue');
let root = document.documentElement;

const orangeColor = document.querySelector('.orange');
const greenColor = document.querySelector('.green');

const brush = document.querySelector('.brush');

const modalShadow = document.querySelector('.modal-shadow');

let mseconds = 0;
let seconds = 0;
let numberOfMeasurement = 0;
let count;
let click = 0;


const startCount = ()=>{
    
    document.querySelectorAll('li').forEach(el =>{
        el.style.display = "none";
    })

    mseconds+=1;
    stopWatch.textContent = `${seconds}:0${mseconds}`;
    if(mseconds > 9){
        stopWatch.textContent = `${seconds}:${mseconds}`;
    }
    if(mseconds > 99){
        mseconds = 0;
        seconds+=1;
        stopWatch.textContent = `${seconds}:0${mseconds}`;
    }
}

const stopCount = ()=>{
    clearInterval(count);
    click = 0;
    console.log(`${seconds}:${mseconds}`);
}

const lastTimeInfo = ()=>{
    clearInterval(count);
    
    numberOfMeasurement++;

    if(stopWatch.textContent !== "0:00"){
        createLi(numberOfMeasurement, stopWatch.textContent);
        time.textContent = `Ostatni pomiar ${stopWatch.textContent}`;
        time.style.visibility = "visible";
    }
    stopWatch.textContent = "0:00";

    mseconds = 0;
    seconds = 0;
    click = 0;

}

const createLi = (number, stopTime)=>{
    const newLi = document.createElement("li");
    newLi.innerHTML = `Pomiar nr.${number}: ${stopTime}`;

    timeList.appendChild(newLi);
}

const showMeasurement = ()=>{
    document.querySelectorAll('li').forEach(el =>{
        el.style.display = "flex";
    })
}

const cleanAll = ()=>{
    clearInterval(count);
    mseconds = 0;
    seconds = 0;
    click = 0;
    numberOfMeasurement = 0;
    stopWatch.textContent = "0:00"
    time.style.visibility = "hidden";
    document.querySelectorAll('li').forEach(el =>{
        el.remove();
})
}

const start = ()=>{
    click++;
    if(click == 1){
        count = setInterval(startCount, 10)

    }else{
        return;
    }
}
startBtn.addEventListener('click', start);

const showInformation = ()=>{
    document.querySelector('.modal-shadow').style.display = "block";
    document.querySelector('.modal-shadow').classList.add("modal-animation");
    
}

const closeInfo = ()=>{
    document.querySelector('.modal-shadow').style.display = "none";
}

const changeColorToBlue = ()=>{
    root.style.setProperty("--first-color", '#87cefa');
    root.style.setProperty("--hover-color", '#58ace0');
}

const changeColorToOrange = ()=>{
    root.style.setProperty("--first-color", '#FA1406');
    root.style.setProperty("--hover-color", '#e2241a');

}

const changeColorToGreen = (e)=>{
    root.style.setProperty("--first-color", '#32cd32');
    root.style.setProperty("--hover-color", '#2db32d');
}

const showPanel = ()=>{
    document.querySelector('.color-panel').classList.toggle('hidden');
}

pauzaBtn.addEventListener('click', stopCount);
stopBtn.addEventListener('click', lastTimeInfo);
archivesBtn.addEventListener('click', showMeasurement);
resetBtn.addEventListener('click', cleanAll);
info.addEventListener('click', showInformation);
closeBtn.addEventListener('click', closeInfo);
blueColor.addEventListener('click', changeColorToBlue);
orangeColor.addEventListener('click', changeColorToOrange);
greenColor.addEventListener('click', changeColorToGreen);
brush.addEventListener('click', showPanel);
window.addEventListener('click', e=> {
    if(e.target === modalShadow){
        document.querySelector('.modal-shadow').style.display = "none";
    }
})

