import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCurrentTables } from '../features/tablesSlise';

const Plan = ({ plan }) => {
    const [select, setSelect] = useState('')

    const dispatch = useDispatch();

    const handleSaveSelect = (e) => {
        setSelect(e.target.value)
        dispatch(saveCurrentTables({ type: e.target.value, plan: plan }))
    }

    return (
        <tr>
            <td>{plan.name}</td>
            <td>{plan.semestr}</td>
            <td>{plan.formControl}</td>
            <td>{plan.ze}</td>
            <td>{plan.watch}</td>
            <td> <select onChange={handleSaveSelect} value={select} name="" id="">
                <option value="выбрать план">выбрать план</option>
                <option value="перезачеты">перезачеты</option>
                <option value="инд. план">инд. план</option>
                <option value="лист расхождения">лист расхождения</option>
            </select> </td>
        </tr>

    );
};

export default Plan