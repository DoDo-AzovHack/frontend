import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "../../shared/others/Layout";

import { NotFoundScreen } from "../../screens/others/NotFoundScreen";
import { LoginScreen } from "../../screens/Auth/LoginScreen";
import { RegisterScreen } from "../../screens/Auth/RegisterScreen";
import { EventsScreen } from "../../screens/Main/EventsScreen";
import { CreateEventScreen } from "../../screens/Main/CreateEventScreen";
import { EventInfoScreen } from "../../screens/Main/EventInfoScreen";
import { AccountScreen } from "../../screens/Main/AccountScreen";
import { Map } from "../../screens/Map";



export function RoutesComponent() {
	return (
		<Router>
			<Routes>
                <Route path="*" element={ <NotFoundScreen /> } />

                <Route path="/login" element={ <LoginScreen /> } />
                <Route path="/register" element={ <RegisterScreen /> } />

                <Route path='/' element={ <Layout /> }>
					<Route index path='/events' element={ <EventsScreen /> } />
					<Route path="/createEvent" element={ <CreateEventScreen /> } />
					<Route path="/eventInfo" element={ <EventInfoScreen /> } />

					<Route path='/account' element={ <AccountScreen /> } />
				</Route>

				<Route path="/map" element={ <Map /> } />
			</Routes>
		</Router>
	)
}