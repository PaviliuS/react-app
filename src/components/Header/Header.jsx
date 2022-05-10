import stl from './Header.module.scss';

const Header = ({userId,login,logo}) => {
    return (
        <header className={stl.header}>

            <div className={stl.header__content}>
                <div className={stl.header__adv}>
                   
                </div>
                <div className={stl.header__logo}>
                    {logo}
                </div>
                <div className={stl.header__auth}>
                    Id: {userId} | Login: {login}
                </div>
            </div>
        </header>
    );
}

export default Header;