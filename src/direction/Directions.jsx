import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDirections, saveCurrentPlan } from '../features/directionsSlise';
import Direction from './Direction';
import s from './direction.module.css'

const Directions = () => {
    const directions = useSelector((state) => state.directionsSlice.directions);
    const [plan , setPlan] = useState();
    const dispatch = useDispatch();

    const handleSavePlan = (e) => {
        e.preventDefault()
        setPlan(e.target.value)
        dispatch(saveCurrentPlan(e.target.value))
    }

    useEffect(() => {
        dispatch(fetchDirections());
    }, [dispatch])


    return (
        <div className={s.directions}>
            Выберите направление подготовки
            <select onChange={handleSavePlan} value={plan}  className={s.select}>
                {directions.map((direction) => {
                    return <Direction name={direction.name} id={direction._id} key={direction._id} />
                })}
            </select>
        </div>
    )
};

export default Directions;