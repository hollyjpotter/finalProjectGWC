function onSignIn(googleUser)
{
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $("data").css("display","blocl");
}
