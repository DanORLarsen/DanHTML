function visit(){
  var visitss = getCookie("visits");
    if (visitss != ""){
    visitss = visitss +1;
    setCookie('visits', visitss, 1);
  }
  else{
    var visits = 0;
    setCookie('visits', visits, 1);
  }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      alert("No username cookie");
    }
  }
  function deleteCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  function checkVisits() {
    var visitss = getCookie("visits");
    if (visitss != "") {
     alert("Welcome again, you have visited this page " + visitss + " times within a day");
    }
  }