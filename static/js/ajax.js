function getAllUsers(){
	var ajax = $.ajax({
        url: "/api/user/fetchAllUser",
        type: "POST",
        data:{}

    });
    return ajax;
}
function addUsers(orgid,account,username,level){
	var ajax = $.ajax({
        url: "/api/user/saveUser",
        type: "POST",
        data:{
        	"orgid":orgid,
        	"account":account,
        	"username":username,
        	"level":level
        }

    });
    return ajax;
}
function editUsers(id,orgid,account,username,level,password){
	var ajax = $.ajax({
        url: "/api/user/updateUser",
        type: "POST",
        data:{
        	"id":id,
        	"orgid":orgid,
        	"account":account,
        	"username":username,
        	"level":level,
        	"password":password,
        }

    });
    return ajax;
}
function cancelUsers(id){
	var ajax = $.ajax({
        url: "/api/user/cancelUser",
        type: "POST",
        data:{
        	"id":id,
        }

    });
    return ajax;
}
function deleteUsers(id){
	var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
        	"id":id,
        }

    });
    return ajax;
}