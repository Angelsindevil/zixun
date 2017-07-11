//以下用户管理
// var url="http://192.168.2.108:9000";//ct
// var url="http://192.168.2.129:9000";//bh
// var url="127.0.0.1:9000";
var url="";
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
function canceled(id,userid){//取消收录
    var ajax = $.ajax({
        url: url+"/api/bulletin/exclude",
        type: "get",
        data:{
            "id":id,
            "userId":userid,
        }

    });
    return ajax;
}
function included(id,userid){//收录
    var ajax = $.ajax({
        url: url+"/api/bulletin/include",
        type: "get",
        data:{
            "id":id,
            "userId":userid,
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
function getpsFlag(id){//关闭批示
    var ajax = $.ajax({
        url: url+"/api/article/instructionChangeMark",
        type: "post",
        contentType: "application/json;",
        data:JSON.stringify({
            "userId":id,
        })
    });
    return ajax;
}
function closeInstructions(instructionId){//关闭批示
    var ajax = $.ajax({
        url: url+"/api/article/close",
        type: "post",
        contentType: "application/json;",
        data:JSON.stringify({
            "instructionId":instructionId,
        })

    });
    return ajax;
}
function getInstructionsList(userId,pageNo){//获取批示列表
    var ajax = $.ajax({
        url: url+"/api/article/fetchAllInstruction",
        type: "post",
        contentType: "application/json",
        data:JSON.stringify({
            "userId":userId,
            "pageNo":pageNo,
            // "type":type,
            "pageSize":10,
        })

    });
    return ajax;
}
function addInstruction(formData){//新增批示
    var ajax = $.ajax({
        url: url+"/api/article/saveInstruction",
        type: "post",
        data: formData,
        processData: false,
        contentType: false,
    });
    return ajax;
}
function searchInstructionList(userId,keyword,type,pageNo){//搜索批示
    var ajax = $.ajax({
        url: url+"/api/article/searchInstruction",
        type: "post",
        contentType: "application/json;",
        data:JSON.stringify({
          "userId":userId,
          "keyword":keyword,
          "type":type,
          "pageNo":pageNo,
          "pageSize":10,
        })
    });
    return ajax;
}
function addFeedback(formData){//新增反馈／分发
    var ajax = $.ajax({
        url: url+"/api/article/feedBackAndDis",
        type: "post",
        data: formData,
        processData: false,
        contentType: false,
    });
    return ajax;
}
function getInstructionFlow(instructionId){//获取批示流程
    var ajax = $.ajax({
        url: url+"/api/article/viewInstructionDetial",
        type: "post",
        contentType: "application/json;",
        data:JSON.stringify({
            "instructionId":instructionId,
        })

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

function getContentList(userId,pageNo,isRelease){//获取文章列表（未发布/已发布）
  var ajax=$.ajax({
    url:url+'/api/article/getList',
    type:'get',
    data:{
        "userId":userId,
        "method":'contentManage',
        "pageNo":pageNo,
        "pageSize":20,
        "isRelease":isRelease,//0未发布 1已发布
    },
  })
  return ajax;
}
// function getReleasedList(pageNo){//获取已发布文章
//   var ajax=$.ajax({
//     url:url+'/api/org/deleteOrg',
//     type:'get',
//     data:{
//         "method":'contentManage',
//         "pageNo":pageNo,
//         "pageSize":20,
//         "isRelease":'1',
//     },
//   })
//   return ajax;
// }
function releaseArticle(id){//发布文章
  var ajax=$.ajax({
    url:url+'/api/article/release',
    type:'get',
    data:{
       "id":id,
    },
  })
  return ajax;
}
function cancelArticle(id){//取消发布文章
  var ajax=$.ajax({
    url:url+'/api/article/cancelRelease',
    type:'get',
    data:{
       "id":id,
    },
  })
  return ajax;
}
function deleteArticle(id){
  var ajax=$.ajax({
    url:url+'/api/article/delete',
    type:'get',
    data:{
       "id":id,
    },
  })
  return ajax;
}
function contentSearch(keyword,pageNo){//未发布内容搜索
  var ajax=$.ajax({
    url:url+'/api/article/searchArticle',
    type:'get',
    data:{
      // "userId":userId,
      "keyword":keyword,
      "method":'contentManage',
      "pageNo":pageNo,
      "pageSize":20,
      "isRelease":'0',
    },
  })
  return ajax;
}
function releasedSearch(keyword,pageNo){//已发布内容搜索
  var ajax=$.ajax({
    url:url+'/api/article/searchArticle',
    type:'get',
    data:{
      // "userId":userId,
      "keyword":keyword,
      "method":'contentManage',
      "pageNo":pageNo,
      "pageSize":20,
      "isRelease":'1',
    },
  })
  return ajax;
}
function addArticle(type,source,link,title,date,text){//新增文章
  var ajax=$.ajax({
    url:url+'/api/article/save',
    type:'post',
    contentType: "application/json;",
    data:JSON.stringify({
       "type":type,
       "source":source,
       "link":link,
       "title":title,
       "time":date,
       "content":text,
    }),
    // data:{
    //    "type":type,
    //    "source":source,
    //    "link":link,
    //    "title":title,
    //    "date":date,
    //    "content":text,
    // },
  })
  return ajax;
}
function editArticle(id,type,source,link,title,date,text){//编辑文章
  var ajax=$.ajax({
    url:url+'/api/article/update',
    type:'post',
    contentType: "application/json;",
    data:JSON.stringify({
       "id":id,
       "type":type,
       "source":source,
       "link":link,
       "title":title,
       "time":date,
       "content":text,
    }),
  })
  return ajax;
}

//消息相关
function messageDetail(id){//消息详情
  var ajax=$.ajax({
    url:url+'/api/message/getMessageDetail',
    type:'get',
    data:{
       "id":id,
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
    url:url+'/api/message/saveMessage',
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

//收录管理
function getIncludedList(userid,type,pageNo,pageSize){
  var ajax=$.ajax({
    url:url+'/api/bulletin/getIncludedList',
    type:'get',
    data:{
        "userId":userid,
        "type":type,
        // "keyword":keyword,
        "pageNo":pageNo,
        "pageSize":10,
    },
  })
  return ajax;
}
function getIncludedSearch(userid,keyword,type,pageNo,pageSize){
  var ajax=$.ajax({
    url:url+'/api/bulletin/getIncludedList',
    type:'get',
    data:{
        "userId":userid,
        "type":type,
        "keyword":keyword,
        "pageNo":pageNo,
        "pageSize":10,
    },
  })
  return ajax;
}
function buildReporter(userid,articleId){
  var ajax=$.ajax({
    url:url+'/api/bulletin/generateBulletin',
    type:'get',
    data:{
        "userId":userid,
        "articleIds":articleId,
    },
  })
  return ajax;
}
function buildWord(userid,articleId,title){
  var ajax=$.ajax({
    url:url+'/api/bulletin/generateBulletin',
    type:'get',
    data:{
        "userId":userid,
        "articleIds":articleId,
        "title":title
    },
  })
  return ajax;
}
function uploadReporter(formData){//新增批示
  var ajax = $.ajax({
      url: url+"/api/bulletin/uploadBulletin",
      type: "post",
      data: formData,
      processData: false,
      contentType: false,
  });
  return ajax;
}
function getReporter(userid,type,pageNo){
  var ajax=$.ajax({
    url:url+'/api/bulletin/getBulletinList',
    type:'get',
    data:{
        "userId":userid,
        "type":type,
        "pageNo":pageNo,
        "pageSize":10,
    },
  })
  return ajax;
}
function searchReporter(userid,keyword,type,pageNo){
  var ajax=$.ajax({
    url:url+'/api/bulletin/getBulletinList',
    type:'get',
    data:{
        "userId":userid,
        "keyword":keyword,
        "type":type,
        "pageNo":pageNo,
        "pageSize":10,
    },
  })
  return ajax;
}
function deleteReporter(id){
  var ajax=$.ajax({
    url:url+'/api/bulletin/deleteBulletin',
    type:'get',
    data:{
      "id":id,
    },
  })
  return ajax;
}