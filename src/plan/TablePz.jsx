import React from 'react';

const TablePz = ({ pl, header }) => {

    const firstSem = pl.filter(item => {
        return item.semestr === 1
    })
    
    const secondSem = pl.filter(item => {
        return item.semestr === 2
    })

    return (
        <>
            <h5>{header}</h5>
            <table>
                <tr>
                    <th>п/п</th>
                    <th>Дисциплина</th>
                    <th>группа 1</th>
                    <th>группа 2</th>
                    <th>Форма контроля</th>
                    <th>Оценка</th>
                </tr>
                <tr>
                    <td colSpan='6'>1 семестр</td>
                </tr>
                {firstSem?.map((item, index) => {
                    return (
                        <>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.watch}</td>
                                <td>{item.watch}</td>
                                <td>{item.formControl}</td>
                                <td>{item.formControl === 'зачет' ? 'зачтено' : ''}</td>
                            </tr>
                        </>
                    )
                })}
                <tr>
                    <td colSpan='6'>2 семестр</td>
                </tr>
                {secondSem?.map((item, index) => {
                    return (
                        <>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.watch}</td>
                                <td>{item.watch}</td>
                                <td>{item.formControl}</td>
                                <td>{item.formControl === 'зачет' ? 'зачтено' : ''}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    );
};

export default TablePz;