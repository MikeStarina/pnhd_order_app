import React from "react"; 
import styles from './inputs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { onChange } from "../../utils/utils.jsx";
import { orderData } from "../../services/reducers/order-data-reducer";






export function TextInput({ type, inputName, id, title, ...rest}) {

    const dispatch = useDispatch();
    const orderData = useSelector((store) => store.orderData)
   
    

    
   
    return (
        <>
        <span className={styles.input_title} htmlFor={id}>{title}</span>
        <input type={type} className={styles.text_input} name={inputName} id={id} onChange={(e) => onChange(e, dispatch)} value={orderData.inputName}></input>
        <span className={styles.input_error}></span>
        </>
    )
}


export function RadioInput({ type, inputName, id, title }) {



    //Потом дописать более автономный компонент

    const dispatch = useDispatch();
    const orderData = useSelector((store) => store.orderData);

    const isChecked = orderData.textileType === id ? true : false;


    return (
        
        <div className={styles.radio_wrapper}>
            <input type={type} className={styles.radio_input} name={inputName} id={id} onChange={(e) => onChange(e, dispatch)} checked={isChecked}></input>
            <span className={styles.radio_input_title} htmlFor={id}>{title}</span>        
            <span className={styles.input_error}></span>
        </div>
    )
}


export function CheckboxInput({ type, inputName, id, title, placeholder }) {

    const dispatch = useDispatch();

    return (
        <div className={styles.radio_wrapper}>
            <input type={type} className={styles.radio_input} name={inputName} id={id} onChange={(e) => onChange(e, dispatch)} placeholder={placeholder && placeholder}></input>
            <span className={styles.radio_input_title} htmlFor={id}>{title}</span>        
            <span className={styles.input_error}></span>
        </div>
    )
}


/*
    textInput.propTypes = {
        type: string;
        name: string;
        id: string;
        title: string;
        ??? value: ?;
    }
*/