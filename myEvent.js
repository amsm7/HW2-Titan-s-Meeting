
 if (screen.width < 500) {
   $("body").addClass("nohover");
     $("td, th")
         .attr("tabindex", "1")
         .on("touchstart", function() {
             $(this).focus();
         });
 }


 function textCounter(field,field2,maxlimit)
 {
     var countfield = document.getElementById(field2);
     if ( field.value.length > maxlimit ) {
         field.value = field.value.substring( 0, maxlimit );
         return false;
     } else {
         countfield.value = maxlimit - field.value.length;
     }
 }

 $(function() {
     $( '#addMail' ).on('change', function (){
         if (this.checked) {
             $("#mailCC").show();
         } else {
             $("#mailCC").hide();
         }
     });
 });

 function openForm() {
     document.getElementById("myForm").style.display = "block";
 }

 function closeForm() {
     document.getElementById("myForm").style.display = "none";
 }

 document.addEventListener('dragleave', function(e){

     var top = e.pageY;
     var right = document.body.clientWidth - e.pageX;
     var bottom = document.body.clientHeight - e.pageY;
     var left = e.pageX;

     if(top < 10 || right < 20 || bottom < 10 || left < 10){
         console.log('Mouse has moved out of window');
     }

 });


 function myLeaveFunction() {
     document.getElementById("demo2").innerHTML = alert("Whered you go??")
 }

/*this it the modal section*/
