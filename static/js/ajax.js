//以下用户管理
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
function editUsers(id,orgid,account,username,level){
	var ajax = $.ajax({
        url: "/api/user/updateUser",
        type: "POST",
        data:{
        	"id":id,
        	"orgid":orgid,
        	"account":account,
        	"username":username,
        	"level":level,
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

//资讯相关
function getAllArticles(userid){
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
            "userid":userid,
        }

    });
    return ajax;
}
function getArticleType(){
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
        }

    });
    return ajax;
}
function getArticleDetail(id){//获取文章详情
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function canceled(id){//取消收录
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function included(id){//收录
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function searchArticle(keyword){//收录
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
            "keyword":keyword,
        }

    });
    return ajax;
}


//批示相关
function closeInstructions(instructionsId){//收录
    var ajax = $.ajax({
        url: "/api/user/deleteUser",
        type: "POST",
        data:{
            "instructionsId":instructionsId,
        }

    });
    return ajax;
}