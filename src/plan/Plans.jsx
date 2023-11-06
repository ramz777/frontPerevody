import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Plan from './Plan';
import { fetchPlans } from '../features/plansSlise';
import s from './plan.module.css'
import { fetchCourses } from '../features/coursesSlise';
import Tables from './TableIp';
import TableIp from './TableIp';
import TablePz from './TablePz';
import TableLr from './TableLr';

const Plans = () => {

    const [openTables, setOpenTables] = useState(false);

    const plans = useSelector((state) => state.plansSlice.plans);
    const course = useSelector((state) => state.coursesSlice.currentCourse);
    const currentPlan = useSelector((state) => state.directionsSlice.currentPlan);
    const courses = useSelector(state => state.coursesSlice.courses).find(item => item._id === course)
    const iP = useSelector(state => state.tablesSlice.iP)
    const pZ = useSelector(state => state.tablesSlice.pZ)
    const lR = useSelector(state => state.tablesSlice.lR)

    const addTables = (e) => {
        e.preventDefault();
        setOpenTables(true)
    }

    const dispatch = useDispatch();

    const handleLoadPlans = () => {
        dispatch(fetchPlans({ course: course, plan: currentPlan }))
    }


    const sem = plans.filter((item) => {
        if (courses.name === 2023) {
            return item.semestr <= 2
        } else if (courses.name === 2022) {
            return item.semestr <= 4
        } else if (courses.name === 2021) {
            return item.semestr <= 6
        } else {
            return item.semestr <= 8
        }
    })

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])
    return (
        <div>
            <button className={s.btn} onClick={handleLoadPlans}>load</button>
            <table>
                <tr>
                    <th>наименование</th>
                    <th>семестр</th>
                    <th>форма контроля</th>
                    <th>з.е.</th>
                    <th>часы</th>
                    <th>выбрать план</th>
                </tr>
                {sem.map((plan) => {
                    return <Plan plan={plan} key={plan._id} />
                })}
            </table>
                <button onClick={addTables} className="addNewTables">
                    add
                </button>

                {openTables && (
                    <>
                        <TableIp pl={iP} header='инд план'/>
                        <TablePz pl={pZ} header='перезачеты'/>
                        <TableLr pl={lR} header='лист расхождения'/>
                    </>
                )}

        </div>
    )
};

export default Plans;