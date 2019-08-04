'use strict';

chrome.alarms.onAlarm.addListener(
    function() {
        chrome.browserAction.setBadgeText({text: ''});
        chrome.storage.sync.get(['popupMessage'],
            function(item) {
                chrome.notifications.create(
                    {
                        type:     'basic',
                        iconUrl:  'stay_hydrated.png',
                        title:    'Time to Hydrate',
                        message:  item.popupMessage,
                        buttons: [
                            {title: 'Keep it Flowing.'}
                        ],
                        priority: 0
                    }
                );
            }
        )
    }
);

chrome.notifications.onButtonClicked.addListener(
    function() {
        chrome.storage.sync.get(['minutes'], 
            function(item) {
                chrome.browserAction.setBadgeText({text: 'ON'});
                chrome.alarms.create({delayInMinutes: item.minutes});

                // chrome.alarms.create({when: Date.now() + item.diff});
            }
        );
    }
);

