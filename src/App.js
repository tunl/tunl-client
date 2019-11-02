import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import Home from "./pages/Home";
import Environments from "./pages/Environments";
import NotFound from "./pages/404";

function App() {
	return (
		<Router history={history}>
			<div className='app'>
				<div className='pageContainer'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/envs' component={Environments} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>

	);
}

export default App;
