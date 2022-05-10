import { useState } from 'react';
import stl from './Pagination.module.scss';

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let portionSize = 10;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;


    let pagesElements = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(element => {
        if (element === props.currentPage) {
            return <div key={`pagination${element}`} className={stl.pagination__item + ' ' + stl.active}>{element}</div>
        }
        else {
            return <div key={`pagination${element}`} className={stl.pagination__item} onClick={() => props.onPageChange(element, props.pageSize)}>{element}</div>
        }
    })

    return (
        <div className={stl.pagination}>
            <div className={stl.pagination__content}>
                <div className={stl.pagination__items}>
                    {portionNumber > 1 && <div className={stl.pagination__item} onClick={() => setPortionNumber(portionNumber - 1)}>{'<<'}</div>}
                    {pagesElements}
                    {portionCount > portionNumber && <div className={stl.pagination__item} onClick={() => setPortionNumber(portionNumber + 1) }>{'>>'}</div>}
                </div>
            </div>
        </div>
    )
}
export default Pagination;