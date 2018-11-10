$(document).ready(function () {

    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");

        var newDevourState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured to false");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurg = {
            burger_name: $("#bu").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});