function appReady(){  
       $("#infodiv").html("Testing JSONP with jQuery");  
     }  
   
     $(document).ready(function(){  
       $("#get-name").click(function(){  
         handleClick();  
       });  
   
       $("#ajax_error").ajaxError(function(e, jqxhr, settings, exception) {  
         $(this).text( "Error requesting page " + settings.url);  
       });  
     });  
   
     document.addEventListener("deviceready", appReady, false);  
   
     $( document ).bind( "mobileinit", function() {  
       // Make your jQuery Mobile framework configuration changes here!  
       $("#infodiv").html('mobileinit worked');  
       $.mobile.allowCrossDomainPages = true;  
     });  
   
     function handleClick(){  
       var url = 'http://fineglasswork.com/histmarkers/client/partial.php';  
   
       $.ajax({  
         type: 'GET',  
         url: url,  
         contentType: "application/json",  
         dataType: 'jsonp',  
         data: {first: $("#firstname").val(), last: $("#lastname").val() },  
         crossDomain: true,  
         success: function(res) {  
           $("#resultsdiv").html("Hello, " + res.firstname + " " + res.lastname);  
           console.dir(res.fullname);  
         },  
         error: function(e) {  
           console.log(e.message);  
         },  
         complete: function(data) {  
           console.log(e.message);  
         }  
       });  
     }  