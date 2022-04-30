import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app'>

      <HeaderContainer logo='MTUCI BOOK' />

      <div className='app__content'>
        <div className='app__menu'>
          <Navbar />
        </div>

        <div className='app__route'>
          <Routes>
            <Route path='/profile/:userId/' element={<ProfileContainer />}></Route>
            <Route path='/messages/*' element={<DialogsContainer />}></Route>
            <Route path='/users/' element={<UsersContainer />}></Route>
            <Route path='/users/' element={<UsersContainer />}></Route>
            <Route path='/login/' element={<Login />}></Route>
          </Routes>
        </div>

        <div className='app__adv'>
     
        </div>
      </div>
    </div>
  );
}

export default App;