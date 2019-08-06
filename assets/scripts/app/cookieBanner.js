function setCookieBanner () {

    var cookieBannerSuccess = document.querySelector('.nhsuk-success-banner');

    if (document.cookie.indexOf("cookiePreference=") >= 0) {
        document.getElementById('nhsuk-cookie-banner').style.display = "none";
    } else {
        document.getElementById('nhsuk-cookie-banner').style.display = "block";
        document.getElementById("nhsuk-cookie-banner__link_accept").addEventListener("click", function(){
        
        document.cookie = "cookiePreference = 1;";
        document.querySelector('.nhsuk-cookie-banner').style.display = "none";
        cookieBannerSuccess.style.display = "block";
        });
    }
}

function clickCookieSuccess () {
    var cookieBannerSuccess = document.querySelector('.nhsuk-success-banner');

    if(cookieBannerSuccess) {
        cookieBannerSuccess.addEventListener()
    }
}

function deleteCookie () {

    document.cookie = "cookiePreference= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  
}