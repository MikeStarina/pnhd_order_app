import React from "react";
import styles from './main.module.css';


import { TextInput, RadioInput, CheckboxInput } from "../../components/inputs/inputs.jsx";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';







export default function Main() {

    const orderData = useSelector((store) => store.orderData);
    console.log(orderData);

   

    return (
        <section className={styles.main}>
            
            <div className={styles.form_box}>
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <p className={styles.fieldset_title}>ОБЩАЯ ИНФОРМАЦИЯ:</p>
                        <TextInput type={'text'} title={'№ ЗАКАЗА'} inputName={'orderNumber'} id={'orderNumber'} />
                        <TextInput type={'text'} title={'НАЗВАНИЕ ЗАКАЗА'} inputName={'orderName'} id={'orderName'} />
                        <TextInput type={'text'} title={'МЕНЕДЖЕР'} inputName={'manager'} id={'manager'} />
                        <TextInput type={'date'} title={'ДАТА НАЧАЛА'} inputName={'startDate'} id={'startDate'} placegolder={'укажите текущую дату'}/>
                        <TextInput type={'date'} title={'ДАТА СДАЧИ'} inputName={'endDate'} id={'endtDate'} />
                    </fieldset>

                    <fieldset className={styles.fieldset}>
                        <p className={styles.fieldset_title}>ПАРАМЕТРЫ ТЕКСТИЛЯ:</p>
                        <RadioInput type={'radio'} title={'ПОШИВ'} inputName={'textileType'} id={'isSewing'}/>
                        <RadioInput type={'radio'} title={'ГОТОВЫЕ ИЗДЕЛИЯ'} inputName={'textileType'} id={'isStock'} />
                        
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <p className={styles.fieldset_title}>ПАРАМЕТРЫ НАНЕСЕНИЙ:</p>
                        <CheckboxInput type={'checkbox'} title={'ШЕЛКОГРАФИЯ'} inputName={'printType'} id={'isScreenPrinting'}/>
                        <CheckboxInput type={'checkbox'} title={'DTG'} inputName={'printType'} id={'isDTG'} />
                        <CheckboxInput type={'checkbox'} title={'DTF'} inputName={'printType'} id={'isDTF'} />
                        <CheckboxInput type={'checkbox'} title={'ВЫШИВКА'} inputName={'printType'} id={'isEmbroidery'} />
                        <CheckboxInput type={'checkbox'} title={'ТЕРМОТРАНСФЕР'} inputName={'printType'} id={'isHeatTransfer'} />
                        
                    </fieldset>
                    <Link to='/textile' className={styles.link}>
                        <button type='submit' className={styles.submit_button}>ДАЛЕЕ</button>
                    </Link>
                </form>
            </div>
        </section>
    );
}