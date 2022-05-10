import stl from './Preloader.module.scss';
import preloader from '../../assets/images/preLoader.gif'

const Preloader = (props) => {

    return (
        <div className={stl.preloader}> <img src={preloader} alt='Preloader'></img> </div>
    );
}

export default Preloader;