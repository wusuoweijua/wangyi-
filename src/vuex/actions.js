import {
  getindexCateModule,
  getindexDatas
} from '../api/index'
import {
  GETINDEXCATEMODULE,
  GETINDEXDATAS
} from './mutation-type'
export default{
  async getIndexListAction({commit}){
    let result = await getindexCateModule()
    if(result.data.code === 0){
      commit(GETINDEXCATEMODULE,result.data.data)
    }
  },
  async gethotListAction({commit}){
    let result = await getindexDatas()
    if(result.data.code === 0){
      commit(GETINDEXDATAS,result.data.data)
    }
      
      
  }
}