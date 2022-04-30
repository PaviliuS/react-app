import stl from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={stl.header}>

            <div className={stl.header__content}>
                <div className={stl.header__adv}>
                   
                </div>
                <div className={stl.header__logo}>
                    {props.logo}
                </div>
                <div className={stl.header__auth}>
                    Id: {props.userId} | Login: {props.login}
                </div>
            </div>
        </header>
    );
}

export default Header;