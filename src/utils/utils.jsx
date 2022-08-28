import { ON_FORM_CHANGE, ON_RADIO_FROM_CHANGE, SET_PRINT_TYPE } from "../services/actions/forms-actions.jsx"




export const onChange = (e, dispatch) => {

    if (e.target.name === 'textileType') {
        
        dispatch({ 
            type: ON_FORM_CHANGE,
            formName: e.target.name,
            payload: e.target.id,
        })
    } else if (e.target.name === 'printType') {

        dispatch({ 
            type: SET_PRINT_TYPE,
            formName: e.target.id,
            
        })
    } else {
    
        dispatch({ 
            type: ON_FORM_CHANGE,
            formName: e.target.name,
            payload: e.target.value,
        })
    }
}