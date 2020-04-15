import * as types from './mutation-type'

export const changeList = function ({commit},{list,loop}){
    console.log(list,77771111,loop)
    const song = list.find(item=>{
        return item.name === '爱你'
    })
    if(song){
      song.name = '根本不爱你'
    }
    console.log(song,6666666)
    commit (types.CHANGE_LIST,list)
    commit (types.CHANGE_LOOP,loop)
}

export const changePlaying = function ({commit},{playing}){
    commit (types.CHANGE_PLAYING,playing)
}

export const setCurrentIndex = function({commit},currentIndex){
    commit (types.SET_CURRENT_INDEX,currentIndex)
}