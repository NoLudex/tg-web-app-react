import React, { useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('alco');
    const { tg } = useTelegram();


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        });
    }, [])

    useEffect(() => {
        if(!name || !lastName) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, lastName])

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div>
            <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type="text" 
                placeholder={'Ваше имя'} 
                value={name}
                onChange={onChangeName}
            />
            <input 
                className={'input'} 
                type="text" 
                placeholder={'Фамилия'} 
                value={lastName}
                onChange={onChangeLastName}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'legal'}>Водка</option>
                <option value={'legal'}>Булка</option>
            </select>
        </div>
    );
}

export default Form;