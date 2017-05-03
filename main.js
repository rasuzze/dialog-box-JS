$(document).ready(function(){

        $('#show-warning').on('click', function(){
                // alert('show-warning');

                var element = new Dialog('Warning', 'Tai yra warning zinute');
                console.log(element);
                //var div = element.makeContainer();
               element.show();
               element.config();
       });
 
        $('#show-success').on('click', function(){
                // alert('show-success');

                var element = new Dialog('Success', 'Tai yra success zinute');
            	// $('#insert .panel').remove();
             //    $('#insert').append(element.div);
             element.show();
             element.config();
        });

        $('#show-error').on('click', function(){
                // alert('show-error');

         var element = new Dialog('Error', 'Tai yra error zinute');
       			// $('#insert .panel').remove();
          //       $('#insert').append(element.div);
          element.show();
          element.config();
       });
})