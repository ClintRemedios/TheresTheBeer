logToDom('Init Beacon 2 Scan.');

var delegate2 = new cordova.plugins.locationManager.Delegate()

delegate2.didDetermineStateForRegion = function(pluginResult)
{
  logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

  //cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));
}

delegate2.didStartMonitoringForRegion = function(pluginResult)
{
  //console.log('didStartMonitoringForRegion:', pluginResult);

  logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
}

delegate2.didRangeBeaconsInRegion = function(pluginResult)
{
  logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
}

logToDom('Beacon 2 Delegated');
var uuid = '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6';
var identifier = 'AlexBeacon';
var minor = 2;
var major = 1;
var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

cordova.plugins.locationManager.setDelegate(delegate2);
cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(console.error)
    .done();
logToDom('End Beacon 2 Scan.');
