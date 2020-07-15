$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var notDevoured = $(this).data("notdevoured");

    var isDevoured = {
      devoured: notDevoured,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured,
    }).then(function () {
      console.log("changed devoured to", notDevoured);
      location.reload();
    });
  });

  //   $(".delete-burger").on("click", function (event) {
  //     var id = $(this).data("id");

  //     $.ajax("/api/burgers/" + id, {
  //       type: "DELETE",
  //     }).then(function () {
  //       console.log("burger devoured", id);
  //       location.reload();
  //     });
  //   });
});
