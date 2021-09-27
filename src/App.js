import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Faq from './panels/Faq';
import Persik from './panels/Persik';
import Profil from './panels/Profil';
import Shop from './panels/Shop';
import Console from './panels/Console';
import History from './panels/History';
import AddServer from './panels/AddServer';
import Admin from './panels/Admin';
window.onload = function() {
	var paramsString = document.location.hash; 
var searchParams = new URLSearchParams(paramsString);
var yourDate = new Date()

 };


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Persik id='Persik' go={go} />
					<Faq id='Faq' go={go} />
					<Profil id='Profil' go={go} />
					<Shop id='Shop' go={go} />
					<Console id='Console' go={go}/>
					<History id='History' go={go}/>
					<Admin id='Admin' go={go}/>
					<AddServer id='AddServer' go={go} />

				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
