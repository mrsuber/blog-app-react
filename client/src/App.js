import {Topbar,Home,Single,Write,Settings,Login,Register} from './components'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  const user=false
  return (
    <Router>
        <Topbar user={user}/>
        <Switch >
            <Route exact path="/"><Home/></Route>
            <Route exact path="/login">{user? <Home/> :<Login/>}</Route>
            <Route exact path="/register">{user? <Home/> : <Register/>}</Route>
            <Route exact path="/settings">{user? <Settings/> : <Login/>}</Route>
            <Route exact path="/write">{user? <Write/> : <Login/>}</Route>
            <Route exact path="/post/:postId"><Single/></Route>
        </Switch>

    </Router>
  );
}

export default App;
