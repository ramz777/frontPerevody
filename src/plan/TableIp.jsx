import React from 'react';
import './1.css'

const TableIp = ({ pl, header }) => {

    const sumZe = pl.reduce((sum, item) => {
        return sum + item.ze
    }, 0)


    let classNames = '';
    if(sumZe > 70){
        classNames = 'red'
    }

    return (
        <>
            <h5>{header}</h5>
            <table>
                <tr>
                    <th>п/п</th>
                    <th>наименование дисциплины</th>
                    <th>Семестр</th>
                    <th>Объем курса в акад.часах</th>
                    <th>Объем курса в з./е.</th>
                    <th>Форма отчетности</th>
                </tr>
                {pl?.map((item, index) => {
                    return (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.semestr}</td>
                            <td>{item.watch}</td>
                            <td>{item.ze}</td>
                            <td>{item.formControl}</td>
                        </tr>    
                    )
                    
                })}
                <tr>
                    <td colSpan='4'>Итого</td>
                    <td className={classNames}>{sumZe}</td>
                    <td> </td>
                </tr>
            </table>
        </>
    );
};

export default TableIp;