import React from 'react';
import s from './direction.module.css'

const Direction = ({ name, id }) => {

    return (
        <option className={s.option} id={id} value={id}>
            {name}
        </option>
    );
};

export default Direction;