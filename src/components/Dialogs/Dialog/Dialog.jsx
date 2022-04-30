import stl from './Dialog.module.scss';

import { NavLink } from 'react-router-dom';
const Dialog = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={navData => navData.isActive ? stl.activeLink : stl.Link}>
            <div className={stl.item}>
                <div className={stl.item__img}>
                    <img src='https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg' alt='image1'></img>
                </div>
                <div className={stl.item__info}>
                    <div className={stl.item__name}>{props.name}</div>
                    <div className={stl.item__message}>{props.message}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog;