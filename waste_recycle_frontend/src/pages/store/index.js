import { createStore } from 'vuex'
const store = createStore({
    state:{//存放状态
        "active": 0,
        "activeIndex": 0,
        "classifyFlush": false,
        "cardIndex": 0,
        "num": 0,
        "rankFlush": false
    },
    mutations:{
        change(state, newVal){
            state.active = newVal
        },
        gridIndex(state, newVal){
            state.activeIndex = newVal
        },
        classifyChange(state, newVal){
            state.classifyFlush = newVal
        },
        cardIndexChange(state, newVal){
            state.cardIndex = newVal
        },
        goodsNumChange(state, newVal){
            state.num = newVal
        },
        rankFlush(state, newVal){
            state.rankFlush = newVal
        }
    }
})

export default store