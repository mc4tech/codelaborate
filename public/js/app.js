/// REGISTRATION AUTH

$('#createAccount').on('click', function(event){
    event.preventDefault();
    const user = {
        username: $("#username").val(),
        password: $("#userpass").val(),
        passwordConf: $("#userpassconf").val()
    }
    console.log(user);
    alert('this works');
    $.post('/api/register', user, function(response){
        console.log(response);
    })
})



// /// LOGIN AUTHENTICATION **IN PROGRESS***
// $('#LoginAccount').on('click', function(event){
//     event.preventDefault();

