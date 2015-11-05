

logToDom('Init Beacon 1 Scan.');
var delegate = new cordova.plugins.locationManager.delegate.implement({

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
logToDom('Beacon 1 Delegated');
var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D';
var identifier = 'Blueberry Pie';
var minor = 57488;
var major = 50320;
var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

cordova.plugins.locationManager.setDelegate(delegate);
cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(console.error)
    .done();

logToDom('End Beacon 1 Scan.');
