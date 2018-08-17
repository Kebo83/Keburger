
$(function() {
  $(".burgerAvailable").on("click", function(event) {
    var id = $(this).attr("id");
    // var data = $(this).attr("data");
    var data= {devoured:"true"};
console.log(data);
    console.log(id);

    // Send the PUT request.
    $.ajax({
      url: "/burgers/" + id,
      type: "PUT",
      data: data,
    // }).then(
    //   function() {
    //     console.log("changed eaten to ", devoured);
    //     // Reload the page to get the updated list
    //     location.reload();
       }).then(function(result){
    });
      // }
    // );


     
  // });


//     // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });


  });
});
