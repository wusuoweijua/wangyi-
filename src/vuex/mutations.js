import {
  GETINDEXCATEMODULE,
  GETINDEXDATAS
} from './mutation-type'
export default {
  [GETINDEXCATEMODULE](state,datas){
    state.navList = datas
  },
  [GETINDEXDATAS](state,datas){
    state.hotList = datas
  }
}