$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})


// $("#update_user").submit(function(event){
//     event.preventDefault();

//     var unindexed_array = $(this).serializeArray();
//     var data = {}

//     $.map(unindexed_array, function(n, i){
//         data[n['name']] = n['value']
//     })
    
//     var request = {
//         "url" : `http://localhost:3000/api/users${data.id}`,
//         "method" : "PUT",
//         data: JSON.stringify(data),
//         "data" : data
//     }

//     $.ajax(request).done(function(response){
//         alert("Data Updated Successfully!");
//     })

// })

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value'];
    });

    var userId = data.id; // Extract the id value

    // Perform validation
    if (!userId) {
        alert("Please provide a valid user ID."); // Display an error message if the ID is empty
        return; // Stop further execution
    }

    var request = {
        url: `http://localhost:3000/api/users/${userId}`,
        method: "PUT",
        data: JSON.stringify(data),
        contentType: "application/json"
    };

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    });
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}