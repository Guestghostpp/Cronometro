var seconds = 00
var minutes = 00
var horas = 00
var interval

function twodigits(digit){
    if(digit < 10){
        return ("0"+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval=setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function zero(){
    clearInterval(interval)
    seconds=0
    minutes=0
    document.getElementById("valueh1").innerText="00:00:00"
}

function watch(){
    seconds++
    if(seconds==60){
        minutes++
        seconds=0
        if(minutes==60){
            minutes=0
            horas++
        }
    }
    document.getElementById("valueh1").innerText=twodigits(horas)+":"+twodigits(minutes)+":"+twodigits(seconds)
}