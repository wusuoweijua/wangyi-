import ajax from './ajax'
//请求首页导航列表信息
export const getindexCateModule = () => ajax({
  url:'/api/getindexCateModule'
})
export const getindexDatas = ()=> ajax({
  url:'/api/getIndexDatas'
})
export const getSearch = ()=>ajax({
  url:'/api/getSearch'
})
export const getSearchTip = (data)=>ajax({
  url:'/foo/xhr/search/searchAutoComplete.json',
  method:'POST',
  data:{
    keywordPrefix:data
  }
})