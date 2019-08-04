// Chrome Alarms
// https://developer.chrome.com/extensions/alarms#method-create

// currDate = new Date();
// currTime = currDate.toTimeString().split(":");
// currHours = currTime[0];
// currMinutes = currTime[1];
// document.getElementById("alarmTime").defaultValue = currHours + ":" + currMinutes;

'use strict';

function setAlarm(event) {
    chrome.browserAction.setBadgeText({text: 'ON'});

    // let minutes = document.getElementById("alarmTime").value;

    // // Calculates difference in milliseconds between curr and entered time
    // var dtStart = new Date("7/20/2015");
    // var dtEnd = new Date("7/20/2015 " + minutes);
    // var diff = dtEnd - dtStart;
    // document.getElementById("alarmTitle").value = diff;
    // chrome.alarms.create({when:  Date.now() + diff});

    // chrome.alarms.create({when:  Date.now() + 5000});        // After 5 secs from now
    let minutes = parseFloat(document.getElementById("alarmMinutes").value);
    if(minutes == "") {
        minutes = 0.1;
    }
    chrome.alarms.create({delayInMinutes: minutes});
    chrome.storage.sync.set({minutes: minutes});
      

    chrome.storage.sync.set({minutes: minutes});
    // chrome.storage.sync.set({diff: diff});

    // sending text to popup
    // chrome.storage.sync.set({ popupMessage: document.getElementById("srtxt").innerHTML });
    let popupMessage = document.getElementById("alarmTitle").value;
    if(popupMessage == "") {
        popupMessage = "SR Notification";
    }
    chrome.storage.sync.set({ popupMessage: popupMessage });

    window.close();
}

function clearAlarm() {
    chrome.browserAction.setBadgeText({text: ''});
    chrome.alarms.clearAll();
    window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('sampleSecond').addEventListener('click', setAlarm);
document.getElementById('createAlarm').addEventListener('click', setAlarm);
// document.getElementById('15min').addEventListener('click', setAlarm);
// document.getElementById('30min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);

