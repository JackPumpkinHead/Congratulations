import React, { useState } from 'react';
import style from './Choices.module.css';

const holidays = {
    newyear: 'Новый год',
    birthdayWomen: 'День рождения  Ж',
    birthdayMan:' День рождения  М',
    womenday: '8 марта',
    knowledgeday: 'День знаний',
};

const Choices = () => {
    const [ isOpenChoices, setIsOpenChoices ] = useState(false);
    const [ holiday, setHoliday ] = useState('Выбрать праздник');

    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices);
    };

    const changeHolliday = title => {
        setHoliday(title);
        toggleChoices();
    };

    return (
        <div className={ style.wrapper }>
            <div>
                <button className={ style.button } onClick={ toggleChoices }>{ holiday }</button>
                { isOpenChoices && (
                    <ul className={ style.list }>
                        { Object.entries(holidays).map(item => (
                            <li 
                                className={ style.item } 
                                key={ item[0] }
                                onClick= { () => {
                                    changeHolliday(item[1])
                                } }
                            >
                                { item[1] }
                            </li>
                        ))}
                    </ul>
                ) }
            </div>
        </div>
    )
};

export default Choices;