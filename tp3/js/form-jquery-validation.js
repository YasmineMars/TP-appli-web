

$(document).ready(function(){
    console.log( "DOM ready!" );

    $("#submit").on("click",function(event){
        event.preventDefault();
        console.log( "click" );

        if($("#nom").val().length == 0  || $("#prenom").val().length == 0  || $("#naissance").val().length == 0  || 
        $("#addr").val().length == 0 || $("#mail").val().length == 0){
            $(".modal-body").text("Veuillez remplir tous les champs svp");
            $('#myModal').modal("show");

        }
        else{
            $(".modal-body").text("Vous etes nés le " +$("#naissance").val()+ "et vous habitez " );
            var city = $("#addr").val();  
            var dateDeNaissance = $("#naissance").val();   
            $(".modal-body").html(`
            <p > Vous etes nés le ${dateDeNaissance} , et Vous habitez : </p>
            <img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>
            <p><a href="https://www.google.com/maps/dir//${city},${city}"> <br>${city} </p>`);
            $('#myModal').modal("show");



        }
      });

});


