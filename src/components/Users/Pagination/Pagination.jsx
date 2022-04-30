import stl from './Pagination.module.scss';

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i<=pagesCount; i++){
        pages.push(i);
    }

    let pagesElements = pages.map(element => {
        if (element === props.currentPage) {
            return <div className={stl.pagination__item + ' ' + stl.active}>{element}</div>
        }
        else {
            return <div className={stl.pagination__item} onClick={() => props.onPageChange(element, props.pageSize)}>{element}</div>
        }
    })

    return (
        <div className={stl.pagination}>
            <div className={stl.pagination__content}>
                <div className={stl.pagination__items}>
                    {pagesElements}
                </div>
            </div>
        </div>
    )
}
export default Pagination;