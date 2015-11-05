var logToDom = function (message) {
    var e = document.createElement('label');
    e.innerText = message;

    var br = document.createElement('br');
    var br2 = document.createElement('br');
    document.body.appendChild(e);
    document.body.appendChild(br);
    document.body.appendChild(br2);
};

var delegate = new cordova.plugins.locationManager.Delegate().implement({

    didDetermineStateForRegion: function (pluginResult) {

        logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

        cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
            + JSON.stringify(pluginResult));
    },

    didStartMonitoringForRegion: function (pluginResult) {
        console.log('didStartMonitoringForRegion:', pluginResult);

        logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
    },

    didRangeBeaconsInRegion: function (pluginResult) {
        logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
    }

});

var uuid = '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6';
var identifier = 'Blueberry Pie';
var minor = 2;
var major = 1;
var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

cordova.plugins.locationManager.setDelegate(delegate);
cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(console.error)
    .done();

logToDom('test beacon 2');
