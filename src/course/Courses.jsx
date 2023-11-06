import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Course from './Course';
import { saveCurrentCourse } from '../features/coursesSlise';
import s from './course.module.css'

const Courses = () => {
    const courses = useSelector((state) => state.coursesSlice.courses);
    const [course, setCourse] = useState();

    const dispatch = useDispatch();


    const handleSaveCourse = (e) => {
        e.preventDefault()
        setCourse(e.target.value)
        dispatch(saveCurrentCourse(e.target.value))
    }

    return (
        <div className={s.courses}>
            Выберите год набора потока
            <select value={course} onChange={handleSaveCourse} className={s.select}>
                {courses.map((course) => {
                    return <Course name={course.name} id={course._id} key={course._id} />
                })}
            </select>
        </div>
    )
};

export default Courses;