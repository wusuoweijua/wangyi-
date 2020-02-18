import ajax from './ajax'
//请求首页导航列表信息
export const getindexCateModule = () => ajax({
  url:'/getindexCateModule'
})
export const getindexDatas = ()=> ajax({
  url:'/getIndexDatas'
})