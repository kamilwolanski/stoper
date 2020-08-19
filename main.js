const startBtn = document.querySelector('.start');
const stopWatch = document.querySelector('.stopwatch');

const pauzaBtn = document.querySelector('.pauza');

const stopBtn = document.querySelector('.stop');
const time = document.querySelector('.time');

const archivesBtn = document.querySelector('.history');
const timeList = document.querySelector('.time-list');

const resetBtn = document.querySelector('.reset');


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
    
    time.textContent = `Ostatni pomiar ${stopWatch.textContent}`;
    numberOfMeasurement++;
    createLi(numberOfMeasurement, stopWatch.textContent);
    stopWatch.textContent = "0:00";
    mseconds = 0;
    seconds = 0;
    click = 0;
    time.style.visibility = "visible";

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

// startBtn.addEventListener('click', ()=> count = setInterval(startCount, 10));
pauzaBtn.addEventListener('click', stopCount);
stopBtn.addEventListener('click', lastTimeInfo);
archivesBtn.addEventListener('click', showMeasurement);
resetBtn.addEventListener('click', cleanAll);
