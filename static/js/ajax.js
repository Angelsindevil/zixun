//以下用户管理
var url="http://192.168.2.129:9000";
// var url="127.0.0.1:9000";
// var url="";
function getAllUsers(){
	var ajax = $.ajax({
        url: url+"/api/user/fetchAllUser",
        type: "POST",
        data:{}

    });
    return ajax;
}
function addUsers(orgid,account,username,level){
	var ajax = $.ajax({
        url:url+ "/api/user/saveUser",
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
        url: url+"/api/user/updateUser",
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
        url: url+"/api/user/cancelUser",
        type: "POST",
        data:{
        	"id":id,
        }

    });
    return ajax;
}
function deleteUsers(id){
	var ajax = $.ajax({
        url: url+"/api/user/deleteUser",
        type: "POST",
        data:{
        	"id":id,
        }

    });
    return ajax;
}

//资讯相关
function getAllArticles(userid,method,type){
    var ajax = $.ajax({
        url: url+"/api/article/getList",
        // contentType: 'application/json;charset=UTF-8',
        type: "POST",
        data:{
            "userid":userid,
            "method":method,
            "type":type,
        }

    });
    return ajax;
}
function getArticleType(){
    var ajax = $.ajax({
        url: url+"/api/article/getType",
        type: "POST",
        data:{
        }

    });
    return ajax;
}
function getArticleDetail(id){//获取文章详情
    var ajax = $.ajax({
        url: url+"/api/article/getContent",
        type: "POST",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function canceled(id){//取消收录
    var ajax = $.ajax({
        url: url+"/api/user/deleteUser",
        type: "POST",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function included(id){//收录
    var ajax = $.ajax({
        url: url+"/api/user/deleteUser",
        type: "POST",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function searchArticle(keyword){//收录
    var ajax = $.ajax({
        url: url+"/api/article/searchArticle",
        type: "POST",
        data:{
            "keyword":keyword,
        }

    });
    return ajax;
}


//批示相关
function closeInstructions(instructionId){//关闭批示
    var ajax = $.ajax({
        url: url+"/api/article/close",
        type: "POST",
        data:{
            "instructionId":instructionId,
        }

    });
    return ajax;
}
function getInstructionsList(userId){//获取批示列表
    var ajax = $.ajax({
        url: url+"/api/article/fetchAllInstruction",
        type: "POST",
        data:{
            "userId":userId,
        }

    });
    return ajax;
}
function addInstruction(formData){//新增批示
    var ajax = $.ajax({
        url: url+"/api/article/saveInstruction",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
    });
    return ajax;
}
function addFeedback(formData){//新增反馈／分发
    var ajax = $.ajax({
        url: url+"/api/article/feedBackAndDis",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
    });
    return ajax;
}
function getInstructionFlow(instructionId){//获取批示流程
    var ajax = $.ajax({
        url: url+"/api/article/viewInstructionDetial",
        type: "POST",
        data:{
            "instructionId":instructionId,
        }

    });
    return ajax;
}

//登录
function loginPage(username,password){
  var ajax=$.ajax({
    url:url+'/api/user/login',
    type:'get',
    data:{
      "password":password,
      "username":username,
    },
    success:function(data){
      if(data.state==0){
      }
      else{

      }
    }
  })
  return ajax;
}


//组织
function getOrgTree(){
  var ajax=$.ajax({
    url:url+'/api/user/login',
    type:'get',
    data:{
    },
    success:function(data){
      if(data.state==0){
      }
      else{

      }
    }
  })
  return ajax;
}
function getOrgList(){
  var ajax=$.ajax({
    url:url+'/api/org/getOrgTree',
    type:'get',
    data:{
    },
    success:function(data){
      if(data.state==0){
      }
      else{

      }
    }
  })
  return ajax;
}


//收录
function getIncludedList(userid,type,pageCount,pageSize){
  var ajax=$.ajax({
    url:url+'/api/org/getOrgTree',
    type:'get',
    data:{
        "userid":userid,
        "type":type,
        "pageCount":pageCount,
        "pageSize":10,
    },
  })
  return ajax;
}