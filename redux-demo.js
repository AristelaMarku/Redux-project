const redux = require('redux')

const counterREducer = (state = {counter:0}, action)=>{
    if(action.type ==='increment'){
    return {
       counter:state.counter+1 
    }
  }
  if (action.type === 'decrement'){
      return{
        counter:state.counter-1  
      }
  }
return state
}

const store = redux.createStore(counterREducer);

const counterSubcriber = () =>{
   const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubcriber)

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})