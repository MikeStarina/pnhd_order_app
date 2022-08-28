import { ON_FORM_CHANGE, ON_RADIO_FROM_CHANGE, SET_PRINT_TYPE } from "../actions/forms-actions.jsx";





const initialState = {
    textileType: 'isSewing',
    printType: {
        isScreenPrinting: false,
        isDTG: false,
        isEmbroidery: false,
        isDTF: false,
        isHeatTransfer: false,
    }
}



export function orderData(state = initialState, action) {
    switch(action.type) {
    
        case ON_FORM_CHANGE: {
            
            
            state[action.formName] = action.payload;
            

            return {...state};
        }
        case SET_PRINT_TYPE: {
            console.log(state.printType[action.formName]);
            state.printType[action.formName] = state.printType[action.formName] === false ? true : false;

            return {...state};
        }
        default: return state;
    }
}