alert("Made with ❣️ by Prakash");

hr_hand= document.querySelector('#hr_hand');
mn_hand= document.querySelector('#mn_hand');
sn_hand= document.querySelector('#sn_hand');

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    document.getElementById("hour").innerHTML = htime + ":";
    document.getElementById("minute").innerHTML = mtime + ":";
    document.getElementById("second").innerHTML = stime;

    sn_rotate=6*stime;
    mn_rotate=6*mtime;
    hr_rotate=(30*htime)+(mtime*0.5);

    hr_hand.style.rotate=(`${hr_rotate}deg`);
    mn_hand.style.rotate=(`${mn_rotate}deg`);
    sn_hand.style.rotate=(`${sn_rotate}deg`);
}, 1000);






