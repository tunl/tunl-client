import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Environments from "./pages/Environments";
import NotFound from "./pages/404";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<Router history={history}>
			<Header />
			<div className='app'>
				<div className='page-container'>
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
