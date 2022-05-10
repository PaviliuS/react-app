import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { setInitializedThunkCreator } from './redux/app-reducer';
import Preloader from './components/Preloader/Preloader';

const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy(()=>import('./components/Profile/ProfileContainer') );

class App extends React.Component {
  componentDidMount() {
    this.props.setInitializedThunk();
  }

  render() {
    if (this.props.initialized === false) {

      return (<Preloader/>);
    }
    else {
      return (
        <div className='app'>

          <HeaderContainer logo='MTUCI BOOK' />

          <div className='app__content'>
            <div className='app__menu'>
              <Navbar />
            </div>

            <div className='app__route'>
              <Routes>
                <Route path='/profile/:userId/' element={<React.Suspense><ProfileContainer /></React.Suspense>}></Route>
                <Route path='/messages/*' element={<React.Suspense><DialogsContainer /></React.Suspense>}></Route>
                <Route path='/users/' element={<UsersContainer />}></Route>
                <Route path='/users/' element={<UsersContainer />}></Route>
                <Route path='/login/' element={<LoginContainer />}></Route>
              </Routes>
            </div>

            <div className='app__adv'>

            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitializedThunk: () => {
      dispatch(setInitializedThunkCreator())
    },

  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);