var url = window.location.href;
var swLocation = '/sw.js';

if(navigator.serviceWorker){
    navigator.serviceWorker.register(url+swLocation);
}