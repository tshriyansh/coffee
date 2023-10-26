$(document).ready(function(){
    var isD2C = getCookie('isFromD2C');
    if(isD2C === 'true'){
        document.getElementById("backbutton").style.display = "block";
        $('.hero__text').addClass('backbtnmg');
        document.cookie = "isFromD2C=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    }
});
