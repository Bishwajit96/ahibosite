function getNotification(notificatioCategoryId){
    var tabId=notificatioCategoryId==null?"v-pills-home-tab":"v-pills-home-tab"+notificatioCategoryId;
    $(".nav-link").removeClass('active');
    $('#'+tabId).addClass('active');

    $("#v-pills-home").empty();

    if(notificatioCategoryId==null){
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="https://easternmirrornagaland.com/right-time-for-people-of-nagaland-to-invest-says-agriculture-production-commissioner/" target="_blank" rel="noopener noreferrer" > Right time for people of Nagaland to invest says agriculture production commissioner</a><span> -02/07/2023</span></p>`)  
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="https://easternmirrornagaland.com/ahibo-promises-to-deliver-mobility-solution-in-dimapur/" target="_blank" rel="noopener noreferrer" > 'AHIBO' Promises to deliver mobility solution in Dimapur </a><span> -02/07/2023</span></p>`)
        $("#v-pills-home").append(`<p><a href="https://morungexpress.com/startup-nagaland-winners-recognized" target="_blank" rel="noopener noreferrer" > Startup Nagaland winners recognized </a><span> -14/10/2022</span></p>`)
        $("#v-pills-home").append(`<p><a href="https://nagalandpost.com/index.php/state-sets-aside-rs-65-cr-under-cm-microfinance-initiative/" target="_blank" rel="noopener noreferrer" > Nagaland State sets aside Rs. 65 cr under CM microfinance initiative</a><span> -21/08/20221</span></p>`) 
        $("#v-pills-home").append(`<p><a href="https://morungexpress.com/dmc-issues-permits-home-delivery-services-dimapur" target="_blank" rel="noopener noreferrer" > DMC issues permits for home delivery services in Dimapur</a><span> -03/04/2020</span></p>`)  
    }
    if(notificatioCategoryId==1){
    }
    if(notificatioCategoryId==2){
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="https://easternmirrornagaland.com/right-time-for-people-of-nagaland-to-invest-says-agriculture-production-commissioner/" target="_blank" rel="noopener noreferrer" > Right time for people of Nagaland to invest says agriculture production commissioner</a><span> -02/07/2023</span></p>`)  
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="https://easternmirrornagaland.com/ahibo-promises-to-deliver-mobility-solution-in-dimapur/" target="_blank" rel="noopener noreferrer" > 'AHIBO' Promises to deliver mobility solution in Dimapur </a><span> -02/07/2023</span></p>`)
        $("#v-pills-home").append(`<p><a href="https://morungexpress.com/startup-nagaland-winners-recognized" target="_blank" rel="noopener noreferrer" > Startup Nagaland winners recognized </a><span> -14/10/2022</span></p>`)
        $("#v-pills-home").append(`<p><a href="https://nagalandpost.com/index.php/state-sets-aside-rs-65-cr-under-cm-microfinance-initiative/" target="_blank" rel="noopener noreferrer" > Nagaland State sets aside Rs. 65 cr under CM microfinance initiative</a><span> -21/08/20221</span></p>`) 
        $("#v-pills-home").append(`<p><a href="https://morungexpress.com/dmc-issues-permits-home-delivery-services-dimapur" target="_blank" rel="noopener noreferrer" > DMC issues permits for home delivery services in Dimapur</a><span> -03/04/2020</span></p>`)  
    }
}

$(document).ready(async function () {
    getNotification(null);
})