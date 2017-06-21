export const changeSelArr=(store,payload)=>{//传入一个store参数 和store拥有相同的属性和方法，传入另一个参数msg，最终在mutations中赋值给state中的变量subjectid
    return new Promise(function(resolve, reject) {
        store.commit('changeSelArr',{"selectArr":payload.selectArr});
        resolve("ok");
    })
}
export const changePleObj=(store,payload)=>{//传入一个store参数 和store拥有相同的属性和方法，传入另一个参数msg，最终在mutations中赋值给state中的变量subjectid
    return new Promise(function(resolve, reject) {
        store.commit('changePleObj',{"peopleObj":payload.peopleObj});
        resolve("ok");
    })
}
export const changeArtObj=(store,payload)=>{//传入一个store参数 和store拥有相同的属性和方法，传入另一个参数msg，最终在mutations中赋值给state中的变量subjectid
    return new Promise(function(resolve, reject) {
        store.commit('changeArtObj',{"articleObj":payload.articleObj});
        resolve("ok");
    })
}