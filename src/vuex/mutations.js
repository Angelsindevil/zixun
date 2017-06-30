export const changeSelArr= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.selectArr.name=payload.selectArr.name;
	state.selectArr.id=payload.selectArr.id;
}
export const changePleObj= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.peopleObj.value=payload.peopleObj.value;
	state.peopleObj.i=payload.peopleObj.i;
}
export const changeArtObj= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.articleObj.value=payload.articleObj.value;
	// state.articleObj.radio=payload.articleObj.radio;
	state.articleObj.id=payload.articleObj.id;
	// state.articleObj.flag=payload.articleObj.flag;
}
export const changeUserState= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.userState=payload.userState;
}
export const changeAlertBox= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	// state.type=payload.type;
	// state.psObj=payload.psObj;
	state.psBox.title=payload.title;
	state.psBox.type=payload.type;
	state.psBox.psObj=payload.psObj
	state.psBox.instructionId=payload.instructionId;
}
export const changeClrObj= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.clrId=payload.clrId;
}
export const changeNewArticle= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.newArcticle=payload.newArcticle;
}
export const changePsShow= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.psShow.value=payload.psShow.value;
	state.psShow.id=payload.psShow.id;
}
export const changeUnitVal= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.unitVal=payload.unitVal;
}
export const changeClearAll= (state,payload) => {//将参数mes赋值给state的变量subjectid 
	state.clearAll=payload.clearAll;
}
