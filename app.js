var min = 0;
var sec = 0;
var msec = 0;
var interval;
var count = 0;
var rec = 0;

var minhead = document.getElementById("minheading");
var sechead = document.getElementById("secheading");
var msechead = document.getElementById("miliheading");

function timer() {
    if (sec === 0) {
        sec = "00";
    }
    if (min === 0) {
        min = "00";
    }
    msec++;
    if (msec <= 9) {
        msec = "0" + msec;
        msechead.innerHTML = msec;
    } else {
        msechead.innerHTML = msec;
    }
    if (msec >= 99) {
        sec++;
        if (sec <= 9) {
            sec = "0" + sec;
            sechead.innerHTML = sec + ".";
            msec = 0;
        } else {
            sechead.innerHTML = sec + ".";
            msec = 0;
        }

    } else if (sec >= 59) {
        min++;
        if (min <= 9) {
            min = "0" + min;
            minhead.innerHTML = min + ":";
            sec = 0;
        } else {
            minhead.innerHTML = min + ":";
            sec = 0;
        }
    }
}

function start() {
    count = count + 1;
    if (count % 2 !== 0) {
        interval = setInterval(timer, 10);
        var startbutton = document.getElementById("btnstart");
        startbutton.style.backgroundColor = "red";
        startbutton.style.color = "white";
        startbutton.innerHTML = "STOP";
        var resetbutton = document.getElementById("btnreset");
        resetbutton.innerHTML = "RECORD";
        resetbutton.style.backgroundColor = "green";
        resetbutton.disabled = false;
    } else {
        clearInterval(interval);
        var startbutton = document.getElementById("btnstart");
        startbutton.style.backgroundColor = "yellow";
        startbutton.style.color = "black";
        startbutton.innerHTML = "START";
        var resetbutton = document.getElementById("btnreset");
        resetbutton.innerHTML = "RESET";
        resetbutton.style.backgroundColor = "blue";

    }
}

function reset() {
    if (count % 2 !== 0) {
        rec++;
        if (rec <= 9) {
            rec = "0" + rec;
        }
        var recnumber = document.getElementById("recordNumber");
        var record = document.getElementById("record");
        recnumber.innerHTML += "Record : " + rec + "<br>";
        record.innerHTML += min + ":" + sec + "." + msec + "<br>";

    } else {
        clearInterval(interval);
        min = 0;
        sec = 0;
        msec = 0;
        msechead.innerHTML = "00";
        sechead.innerHTML = "00.";
        minhead.innerHTML = "00:";
        var resetbutton = document.getElementById("btnreset");
        resetbutton.disabled = true;
        var record = document.getElementById("record");
        var recnumber = document.getElementById("recordNumber");
        record.innerHTML = null;
        recnumber.innerHTML = null;
        rec = 0;
    }
}