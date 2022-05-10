import stl from './Navbar.module.scss'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({userId}) => {
    return (
        <nav className={stl.menu}>
            <ul className={stl.menu__list}>
                <li className={stl.menu__item}>
                    <NavLink to={`/profile/${userId}`} className={ navData => navData.isActive ? stl.activeLink : stl.Link }>Моя страница</NavLink>
                </li>
                <li className={stl.menu__item}>
                    <NavLink to='/messages' className={ navData => navData.isActive ? stl.activeLink : stl.Link }>Сообщения</NavLink>

                </li>
                <li className={stl.menu__item}>
                    <NavLink to='/users' className={ navData => navData.isActive ? stl.activeLink : stl.Link }>Пользователи</NavLink>

                </li>
                <li className={stl.menu__item}>
                    <NavLink to='/music' className={ navData => navData.isActive ? stl.activeLink : stl.Link }>Музыка</NavLink>

                </li>
                <li className={stl.menu__item}>
                    <NavLink to='/settings' className={ navData => navData.isActive ? stl.activeLink : stl.Link }>Настройки</NavLink>
                </li>
            </ul>
        </nav>
    );
}

const mapStateToProps = (state) =>{
    return{
        userId: state.auth.userId
    }
}

const NavbarContainer = connect(mapStateToProps,null)(Navbar); 

export default NavbarContainer;