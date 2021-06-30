export function manageFriends(state, action){
    switch (action.type) {
      case "ADD_FRIEND":
       
        return {
          ...state,
          friends: [...state.friends, action.payload]
        }
      case "REMOVE_FRIEND":
        let indexToRemove = state.friends.findIndex( friend =>
          friend.id === action.payload );
 
        let newFriends = [
          ...state.friends.slice(0, indexToRemove),
          ...state.friends.slice(indexToRemove + 1)
        ]
  
       
        return {...state, friends: newFriends};
      default:
        return state;
  
    }
  }