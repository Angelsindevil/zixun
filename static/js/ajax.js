//以下用户管理
var url="http://192.168.2.108:9000";//ct
// var url="http://192.168.2.129:9000";//bh
// var url="127.0.0.1:9000";
// var url="";
function getAllUsers(){
	var ajax = $.ajax({
        url: url+"/api/user/fetchAllUser",
        type: "get",
        data:{}

    });
    return ajax;
}
function addUsers(orgid,account,username,level,password){
	var ajax = $.ajax({
        url:url+ "/api/user/saveUser",
        type: "get",
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
function editUsers(id,orgid,account,username,level,password){
	var ajax = $.ajax({
        url: url+"/api/user/updateUser",
        type: "get",
        data:{
        	"id":id,
        	"orgId":orgid,
        	"account":account,
        	"username":username,
        	"level":level,
          "password":password,//重置的密码
          // "method":method,
        }

    });
    return ajax;
}
function cancelUsers(id){
	var ajax = $.ajax({
        url: url+"/api/user/cancelUser",
        type: "get",
        data:{
        	"id":id,
        }

    });
    return ajax;
}
function excancelUsers(id){
  var ajax = $.ajax({
        url: url+"/api/user/reinstateUser",
        type: "get",
        data:{
          "id":id,
        }

    });
    return ajax;
}
function deleteUsers(id){
	var ajax = $.ajax({
        url: url+"/api/user/deleteUser",
        type: "get",
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
        type: "get",
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
        type: "get",
        data:{
        }

    });
    return ajax;
}
function getArticleDetail(id){//获取文章详情
    var ajax = $.ajax({
        url: url+"/api/article/getContent",
        type: "get",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function canceled(id){//取消收录
    var ajax = $.ajax({
        url: url+"/api/article/exclude",
        type: "get",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function included(id){//收录
    var ajax = $.ajax({
        url: url+"/api/article/include",
        type: "get",
        data:{
            "id":id,
        }

    });
    return ajax;
}
function searchArticle(keyword,pageNo){//收录
    var ajax = $.ajax({
        url: url+"/api/article/searchArticle",
        // contentType: "application/json; charset=UTF-8",
        // contentType : "application/x-www-form-urlencoded",
        // contentType: "application/json",
        type: "get",
        // data:{
        //     "keyword":keyword,
        //     "pageNo":pageNo,
        //     "pageSize":20,
        // }
        data:{
          "keyword":keyword,
          "pageNo":pageNo,
          "pageSize":20,
        },
        // dataType: "json",

    });
    return ajax;
}


//批示相关
function closeInstructions(instructionId){//关闭批示
    var ajax = $.ajax({
        url: url+"/api/article/close",
        type: "get",
        data:{
            "instructionId":instructionId,
        }

    });
    return ajax;
}
function getInstructionsList(userId,type,pageNo){//获取批示列表
    var ajax = $.ajax({
        url: url+"/api/article/fetchAllInstruction",
        type: "get",
        data:{
            "userId":userId,
            "pageNo":pageNo,
            "type":type,
            "pageSize":10,
        }

    });
    return ajax;
}
function addInstruction(formData){//新增批示
    var ajax = $.ajax({
        url: url+"/api/article/saveInstruction",
        type: "get",
        data: formData,
        processData: false,
        contentType: false,
    });
    return ajax;
}
function searchInstructionList(userId,keyword,pageNo){//搜索批示
    var ajax = $.ajax({
        url: url+"/api/article/saveInstruction",
        type: "get",
        data:{
          "userId":userId,
          "keyword":keyword,
          "pageNo":pageNo,
          "pageSize":10,
        }
    });
    return ajax;
}
function addFeedback(formData){//新增反馈／分发
    var ajax = $.ajax({
        url: url+"/api/article/feedBackAndDis",
        type: "get",
        data: formData,
        processData: false,
        contentType: false,
    });
    return ajax;
}
function getInstructionFlow(instructionId){//获取批示流程
    var ajax = $.ajax({
        url: url+"/api/article/viewInstructionDetial",
        type: "get",
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
      "account":username,
    },
  })
  return ajax;
}
function changePassword(id,password){
  var ajax=$.ajax({
    url:url+'/api/user/updateUser',
    type:'get',
    data:{
      "id":id,
      "password":password,
    },
  })
  return ajax;
}
function changeDefaultpw(userId,pwDefault){
  var ajax=$.ajax({
    url:url+'/api/user/login',
    type:'get',
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
    type:'get',
    data:{
    },
  })
  return ajax;
}
function getOrgList(){//获得组织列表
  var ajax=$.ajax({
    url:url+'/api/org/getOrgList',
    type:'get',
    data:{
    },
  })
  return ajax;
}
function addOrg(organization,superiors){
  var ajax=$.ajax({
    url:url+'/api/org/saveOrg',
    type:'get',
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
    type:'get',
    data:{
        "id":id,
        "organization":organization,
        "parentOrgId":superiors,
    },
  })
  return ajax;
}
function deleteOrg(id){
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
        "id":id,
    },
  })
  return ajax;
}
function searchOrg(keyword){
  var ajax=$.ajax({
    url:url+'/api/org/searchOrg',
    type:'get',
    data:{
        "keyword":keyword,
    },
  })
  return ajax;
}

//收录
function getIncludedList(userid,type,pageNo,pageSize){
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
        "userid":userid,
        "type":type,
        "pageNo":pageNo,
        "pageSize":10,
    },
  })
  return ajax;
}

function getContentList(pageNo){//获取文章列表（未发布）
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
        // "userid":userid,
        "method":'contentManage',
        "pageNo":pageNo,
        "pageSize":20,
    },
  })
  return ajax;
}
function getReleasedList(pageNo){//获取已发布文章
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
        "method":'contentManage',
        "pageNo":pageNo,
        "pageSize":20,
        "isRelease":'1',
    },
  })
  return ajax;
}
function releaseArticle(id){//发布文章
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "id":id,
    },
  })
  return ajax;
}
function cancelArticle(id){//取消发布文章
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "id":id,
    },
  })
  return ajax;
}
function deleteArticle(id){
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "id":id,
    },
  })
  return ajax;
}
function contentSearch(keyword,pageNo){//内容搜索
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "id":id,
       "pageNo":pageNo,
       "pageSize":20,
    },
  })
  return ajax;
}
function releasedSearch(keyword,pageNo){//内容搜索
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "id":id,
       "pageNo":pageNo,
       "pageSize":20,
       "isRelease":'1',
    },
  })
  return ajax;
}
function addArticle(type,source,link,title,date,text){//新增文章
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "type":type,
       "source":source,
       "link":link,
       "title":title,
       "date":date,
       "text":text,
    },
  })
  return ajax;
}
function editArticle(id,type,source,link,title,date,text){//编辑文章
  var ajax=$.ajax({
    url:url+'/api/org/deleteOrg',
    type:'get',
    data:{
       "id":id,
       "type":type,
       "source":source,
       "link":link,
       "title":title,
       "date":date,
       "text":text,
    },
  })
  return ajax;
}

//消息相关
function messageDetail(id,method){//消息详情
  var ajax=$.ajax({
    url:url+'/api/message/getMessageList',
    type:'get',
    data:{
       "id":id,
       "method":method,
    },
  })
  return ajax;
}
function getMessageList(userId,method,pageNo,type){//消息列表
  var ajax=$.ajax({
    url:url+'/api/message/getMessageList',
    type:'get',
    data:{
       "userId":userId,
       "method":method,
       "pageSize":10,
       "pageNo":pageNo,
       "type":type,
    },
  })
  return ajax;
}
function getSearchMesList(userId,method,pageNo,keyword){//消息搜索
  var ajax=$.ajax({
    url:url+'/api/message/getMessageList',
    type:'get',
    data:{
       "userId":userId,
       "method":method,
       "pageSize":10,
       "pageNo":pageNo,
       "keyword":keyword,
    },
  })
  return ajax;
}
function addMes(userId,title,content,receivers,sender){//新增消息
  var ajax=$.ajax({
    url:url+'/api/message/getMessageList',
    type:'get',
    data:{
       "userId":userId,
       // "method":method,
       "title":title,
       "content":content,
       "receivers":receivers,
       "sender":sender,
    },
  })
  return ajax;
}

