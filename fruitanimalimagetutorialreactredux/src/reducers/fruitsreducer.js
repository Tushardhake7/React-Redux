const fruitsreducer = (state = {}, action) => {
    
    switch(action.type) {
       case 'FRUITS_DETAILS':
            return {
                ...state,
                fruits: action.payload
            }
            default: 
        return state;
    }
}

export default fruitsreducer;