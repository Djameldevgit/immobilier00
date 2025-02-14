import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageRender from './customRouter/PageRender'
import PrivateRouter from './customRouter/PrivateRouter'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

import Alert from './components/alert/Alert'
import Header from './components/header/Header'
import StatusModal from './components/StatusModal'

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'

import { getSuggestions } from './redux/actions/suggestionsAction'

import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient'

import { getNotifies } from './redux/actions/notifyAction'
import CallModal from './components/message/CallModal'
import PostsPendientes from './components/home/PostsPendientes'
import { getPostsPendientes } from './redux/actions/postAproveAction'
import { getPosts } from './redux/actions/postAction'
import { getUsers } from './redux/actions/userAction'
import Searchusers from './pages/users/searchusers'
import { getBlockedUsers } from './redux/actions/userBlockAction'
import Bloquearusuarios from './pages/bloquearusuarios'
 

function App() {
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
    return () => socket.close()
  }, [dispatch])

  useEffect(() => {
    if (auth.token) {
      dispatch(getUsers(auth.token))
      dispatch(getBlockedUsers(auth.token))
      dispatch(getPostsPendientes(auth.token))
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])
  /*
  <Route exact path="/users/lastusers" component={auth.token ? Lastusers : Login} />
  <Route exact path="/users/searchusers" component={auth.token ? Searchusers : Login} />
  <Route exact path="/users/activityusers" component={auth.token ? Activityusers : Login} />
*/

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") { }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") { }
      });
    }
  }, [])



  return (
    <Router>
      <Alert />

      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}

          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/postsPendientes/index" component={auth.token ? PostsPendientes : Login} />

          <Route exact path="/users/searchusers" component={auth.token ? Searchusers : Login} />
          <Route exact path="/bloquearusuarios" component={auth.token ? Bloquearusuarios : Login} />

 

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />

        </div>
      </div>
    </Router>
  );
}

export default App;
