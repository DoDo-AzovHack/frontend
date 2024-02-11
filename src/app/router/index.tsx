import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "../../shared/others/Layout";

import { NotFoundScreen } from "../../screens/others/NotFoundScreen";
import { LoginScreen } from "../../screens/Auth/LoginScreen";
import { RegisterScreen } from "../../screens/Auth/RegisterScreen";
import { EventsScreen } from "../../screens/Main/EventsScreen";
import { CreateEventScreen } from "../../screens/Main/CreateEventScreen";
import { EventInfoScreen } from "../../screens/Main/EventInfoScreen";
import { AllEventsMapScreen } from "../../screens/Main/AllEventsMapScreen";


export function RoutesComponent() {
	return (
		<Router>
			<Routes>
                <Route path="*" element={ <NotFoundScreen /> } />
				<Route path="/" element={ <LoginScreen /> } />

				<Route path="/login" element={ <LoginScreen /> } />
				<Route path="/register" element={ <RegisterScreen /> } />

                <Route element={ <Layout /> }>
					<Route index path='/events' element={ <EventsScreen /> } />
					<Route path="/createEvent" element={ <CreateEventScreen /> } />
					<Route path="/eventInfo" element={ <EventInfoScreen /> } />

					<Route path='/map' element={ <AllEventsMapScreen /> } />
				</Route>
			</Routes>
		</Router>
	)
}