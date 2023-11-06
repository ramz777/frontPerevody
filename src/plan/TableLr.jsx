import React from 'react';

const TableLr = ({ pl, header }) => {

    return (
        <>
            <h5>{header}</h5>
            <table>
                {pl?.map(item => {
                    return (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.semestr}</td>
                            <td>{item.formControl}</td>
                            <td>{item.ze}</td>
                            <td>{item.watch}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};

export default TableLr;