$(function(){
  $(".change-devour").on("click", function(event){
      var id = $(this).data("id");
      var devoured = !($(this).data("devoured"));

      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: {devoured: devoured}
      }).then(()=>{
          $(this).remove();
          location.reload();
      });
  });

  $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });




})
