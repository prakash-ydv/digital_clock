setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    document.getElementById("hour").innerHTML = htime + ":";
    document.getElementById("minute").innerHTML = mtime + ":";
    document.getElementById("second").innerHTML = stime;
}, 1000);

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    if (htime > 12) {
        new_htime = htime - 12;
        document.getElementById("hour2").innerHTML = new_htime + ":";
    }else{
        document.getElementById("hour2").innerHTML = htime + ":";
    }

    
    document.getElementById("minute2").innerHTML = mtime + ":";
    document.getElementById("second2").innerHTML = stime;
}, 1000);





