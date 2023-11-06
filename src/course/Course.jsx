import React from 'react';
import { useDispatch } from 'react-redux';
import { saveCurrentCourse } from '../features/coursesSlise';

const Course = ({ name, id }) => {
    const dispatch = useDispatch()
    const handleSaveCourse = () => {
        dispatch(saveCurrentCourse(id))

    }
    return (
        <option onClick={handleSaveCourse} id={id} value={id}>
            {name}
        </option>
    );
};

export default Course;