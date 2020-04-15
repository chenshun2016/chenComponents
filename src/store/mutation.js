import * as types from './mutation-type'

export default {
    [types.CHANGE_LIST](state,list){
        console.log(8885555,list)
        state.list = list
    },
    [types.CHANGE_PLAYING](state,playing){
        state.playing = playing
    },
    [types.CHANGE_LOOP](state,loop){
        state.loop = loop
    },
    [types.SET_CURRENT_INDEX](state,currentIndex){
        state.currentIndex = currentIndex
    }
}