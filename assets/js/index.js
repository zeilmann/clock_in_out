       //Array LOG       
       var DB = {
            data1: []
                };

   
   // FUNCTION COMPLETE ZEROS

   function completeZero(n) {
    return n <= 9 ? `0${n}` : `${n}`;
   } 

   // FUNCTION CLEAR INPUTBOX CLOCK IN
   
   function clearAll(){

    document.getElementById("time").value = "";
   
   }    


  //CLICK CHECK BUTTON 
   $('#checkbutton').click(function(event) {
  
   //CAPTURE TIME INPUT BOX
   dataForm = document.getElementById('time').value;

   //CHECK VALID TIME
   if (dataForm.length < 5){
     $.dialog({
             theme: 'supervan',
             title: 'Oops!',
             content: 'Invalid Clock-In Time!',
         });
     return
   }else{
      
     horaSlice = dataForm.slice(0,2 );
     minutoSlice = dataForm.slice(3, 5);
     if (horaSlice < 24 & minutoSlice < 60 ){

     

    }else{
         $.dialog({
             theme: 'supervan',
             title: 'Oops!',
             content: 'Invalid Clock-In Time!',
         });
           return
     }

   };

   dataClockIn= completeZero(dataForm);
   dataForm = completeZero(dataForm);
   dataForm = "2022-08-10T" + dataForm;
   dataR = new Date(dataForm);

   //ADD 8.5 HOURS
   dataR.setHours(dataR.getHours() + 8);
   dataR.setMinutes(dataR.getMinutes() + 30);
   hora = completeZero(dataR.getHours());
   minuto = completeZero(dataR.getMinutes());
   
     
   $.confirm({
             icon: 'fa fa-spinner fa-spin',
             theme: 'modern',
             title: 'You need to wait until',
             content: hora + ":" + minuto,
            }); 
    
         DB.data1.push({
                dataIn: "semdataainda",
                timeIn: dataClockIn,
                timeOut:  hora + ":" + minuto,
                      });


let timeElapsed = Date.now();    
let today = new Date(timeElapsed); 
today = today.toDateString(); 
let text = "";
//ARRAY LOG LOOP
   for (let i = 0; i < DB.data1.length; i++) {
    
    
     text += "<tr>"
       +"<td>"
        + "<div class='d-flex px-2 py-1'>"
        + "<div>"
         +    "<img src='../assets/img/shapes/timer.jpg' class='avatar avatar-sm me-3' alt='user1'>"
        + "</div>"
        + "<div class='d-flex flex-column justify-content-center'>"
        +  "<h6 id = 'demo' class='mb-0 text-sm'>" + today + "</h6>"
       
        +  "</div>"

       +"</div>"
         +"</td>"
          +" <td>"
           +"<span class='badge badge-sm bg-gradient-success'>" + DB.data1[i].timeIn + "</span>"
           +"</td>"
          +"<td class='align-middle text-center text-sm'>"
            +"<span class='badge badge-sm bg-gradient-success'>" + DB.data1[i].timeOut + "</span>"
           +"</td>"
           
           +"</tr>"



      }

      document.getElementById("loopArray").innerHTML = text;
      clearAll();
               
    });


