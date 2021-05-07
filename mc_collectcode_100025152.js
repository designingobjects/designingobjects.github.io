function trackBase() {
    _etmc.push(["setOrgId", "100025152"]);
    _etmc.push(["trackPageView"]);
}

function trackUserInfo(userInfo) {
    _etmc.push(["setOrgId", "100025152"]);
    _etmc.push(["setUserInfo", {"email": userInfo}]);
    _etmc.push(["trackPageView"]);
}

function trackBaseCleanURL() {
    _etmc.push(["setOrgId", "100025152"]);
    var thisURL = window.location.origin + window.location.pathname;
    thisURL = thisURL.slice(0, -1);    
    _etmc.push(["trackPageView", {"item" : thisURL}]);
}
