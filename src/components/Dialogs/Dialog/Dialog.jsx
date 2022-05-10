import stl from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';

const Dialog = ({id,name,message}) => {
    return (
        <NavLink to={'/messages/' + id} className={navData => navData.isActive ? stl.activeLink : stl.Link}>
            <div className={stl.item}>
                <div className={stl.item__img}>
                    <img src='https://cdn-icons-png.flaticon.com/512/56/56745.png' alt='image1'></img>
                </div>
                <div className={stl.item__info}>
                    <div className={stl.item__name}>{name}</div>
                    <div className={stl.item__message}>{message}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog;