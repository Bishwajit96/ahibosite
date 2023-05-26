function getNotification(notificatioCategoryId){
    var tabId=notificatioCategoryId==null?"v-pills-home-tab":"v-pills-home-tab"+notificatioCategoryId;
    $(".nav-link").removeClass('active');
    $('#'+tabId).addClass('active');

    $("#v-pills-home").empty();

    if(notificatioCategoryId==null){
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Data Is publish1</a><span> 26/11/2021</span></p>`)
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Data Is publish2</a><span> 26/11/2021</span></p>`) 
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Data Is publish3</a><span> 26/11/2021</span></p>`) 
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Data Is publish4</a><span> 26/11/2021</span></p>`) 
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Data Is publish5</a><span> 26/11/2021</span></p>`)  
    }
    if(notificatioCategoryId==1){
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Product Launch-1</a><span> 26/11/2021</span></p>`)
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Product Launch-1</a><span> 26/11/2021</span></p>`) 
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Product Launch-1</a><span> 26/11/2021</span></p>`) 
        $("#v-pills-home").append(`<p><img src="images/gif-new.gif" alt="New" srcset=""><a href="#" target="_blank" rel="noopener noreferrer" > Product Launch-1</a><span> 26/11/2021</span></p>`) 
    }
    // var formData={
    //     'action': "getnotificationforuser", 
    //     'notification_cat_id':notificatioCategoryId,
    //     'is_scrollnotification':null,
    //     'is_active':1
    // }
    // $.ajax({
    //     type: "POST",
    //     url: "./api/notificationprocess.php",
    //     data: formData,
    //     dataType: 'json',
    //     success: function (data) {
    //         $("#v-pills-home").empty();
    //         var index=0;

    //         if(data.length>0){
    //             if(index<5){
    //                 $.each(data, function (key, value) {
                    
    //                     $("#v-pills-home").append(`<p><img src="./img/home/gif-new.gif" alt="New" srcset=""><a href="${value.filePath}" target="_blank" rel="noopener noreferrer" >${value.notificationHeading}</a><span> ${value.dateOfNotification}</span></p>`) 
    //                 });
    //             }else{
    //                 $.each(data, function (key, value) {
                    
    //                     $("#v-pills-home").append(`<p><img src="./img/home/gif-new.gif" alt="New" srcset=""><a href="${value.filePath}" target="_blank" rel="noopener noreferrer" >${value.notificationHeading}</a><span> ${value.dateOfNotification}</span></p>`) 
    //                 });
    //             }
                
    //         }
    //         index++;
    //     },
    //     error: function (data) {
            
    //     }
    // })
}

$(document).ready(async function () {
    getNotification(null);
})