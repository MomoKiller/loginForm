/**
 * Created by pkk on 2017/4/23.
 */
var usernam = $("#username").val();
var password = $("#password").val();

var params = {};
params.username = usernam;
params.password = hex_sha1(password);

$.ajax({
    url:"",
    date:JSON.stringifier(params),
    success:function(response){
        switch (response.status){
            case '0':
                break;
            case '1':
                break;
            default:
                break;
        }
    },
    error:function(response){

    }
});