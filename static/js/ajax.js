//以下用户管理
var url="http://192.168.2.108:9000";//ct
// var url="http://192.168.2.129:9000";//bh
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
function addUsers(orgid,account,username,level,password){
	var ajax = $.ajax({
        url:url+ "/api/user/saveUser",
        type: "POST",
        data:{
        	"orgId":orgid,
        	"account":account,
        	"username":username,
        	"level":level,
            "password":password
        }
    });
    return ajax;
}
function editUsers(id,orgid,account,username,level,password,method){
	var ajax = $.ajax({
        url: url+"/api/user/updateUser",
        type: "POST",
        data:{
        	"id":id,
        	"orgId":orgid,
        	"account":account,
        	"username":username,
        	"level":level,
            "password":password,
            "method":method,
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
function getAllArticles(userid,method,type,pageNo){
    var ajax = $.ajax({
        url: url+"/api/article/getList",
        // contentType: 'application/json;charset=UTF-8',
        type: "POST",
        data:{
            "userid":userid,
            "method":method,
            "type":type,
            "pageNo":pageNo,
            "pageSize":20,
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
function searchArticle(keyword,pageNo){//收录
    var ajax = $.ajax({
        url: url+"/api/article/searchArticle",
        type: "POST",
        data:{
            "keyword":keyword,
            "pageNo":pageNo,
            "pageSize":20,
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
    type:'POST',
    data:{
      "password":password,
      "account":username,
    },
  })
  return ajax;
}
function changePassword(userId,pwInit,pwModify){
  var ajax=$.ajax({
    url:url+'/api/user/login',
    type:'POST',
    data:{
      "userId":userId,
      "pwInit":pwInit,
      "pwModify":pwModify,
    },
  })
  return ajax;
}
function changeDefaultpw(userId,pwDefault){
  var ajax=$.ajax({
    url:url+'/api/user/login',
    type:'POST',
    data:{
      "userId":userId,
      "pwDefault":pwDefault,
    },
  })
  return ajax;
}


//组织
function getOrgTree(){//获得组织树
  var ajax=$.ajax({
    url:url+'/api/org/getOrgTree',
    type:'POST',
    data:{
    },
  })
  return ajax;
}
function getOrgList(){//获得组织列表
  var ajax=$.ajax({
    url:url+'/api/org/getOrgList',
    type:'POST',
    data:{
    },
  })
  return ajax;
}
function addOrg(organization,superiors){
  var ajax=$.ajax({
    url:url+'/api/org/saveOrg',
    type:'POST',
    data:{
        "organization":organization,
        "parentOrgId":superiors,
    },
  })
  return ajax;
}
function editOrg(id,organization,superiors){
  var ajax=$.ajax({
    url:url+'/api/org/updateOrg',
    type:'POST',
    data:{
        "id":id,
        "organization":organization,
        "superiors":superiors,
    },
  })
  return ajax;
}
function deleteOrg(id){
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'POST',
    data:{
        "id":id,
    },
  })
  return ajax;
}
function searchOrg(keyword){
  var ajax=$.ajax({
    url:url+'/api/org/searchOrg',
    type:'POST',
    data:{
        "keyword":keyword,
    },
  })
  return ajax;
}

//收录
function getIncludedList(userid,type,pageCount,pageSize){
  var ajax=$.ajax({
    url:url+'/api/org/getOrgTree',
    type:'POST',
    data:{
        "userid":userid,
        "type":type,
        "pageCount":pageCount,
        "pageSize":10,
    },
  })
  return ajax;
}