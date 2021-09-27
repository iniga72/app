import React from 'react';
import PropTypes from 'prop-types';

import {RichCell,CardScroll , Panel, Card, Header, CellButton, Group, Cell, Div, Avatar, FormItem, Textarea, FixedLayout, MiniInfoCell, NativeSelect, SimpleCell} from '@vkontakte/vkui';
import Apps from '../App';
import bridge from '@vkontakte/vk-bridge';
import { Icon20ArticleOutline } from '@vkontakte/icons';
import { Icon20EducationOutline } from '@vkontakte/icons';
import { Icon20CalendarCircleFillRed } from '@vkontakte/icons';
import { Icon20User } from '@vkontakte/icons';
import { Icon20MarketOutline } from '@vkontakte/icons';
import { Icon20ShareOutline } from '@vkontakte/icons';
import { Icon20Add } from '@vkontakte/icons';
import mc from '../img/mc.png';
const Home = ({ id, go, fetchedUser }) => (
	
	
	<Panel id={id}>
		{fetchedUser &&
		<Group >
		</Group>}
		<Group >
		<CardScroll size="s">
        <Card>
		<MiniInfoCell before={<Icon20ArticleOutline />}
          textWrap="full"
          textLevel="primary"
        >
          Пробный текст.
        </MiniInfoCell>
        </Card>
        <Card>
		<MiniInfoCell before={<Icon20ArticleOutline />}
          textWrap="full"
          textLevel="primary"
        >
          Потом заполню.
        </MiniInfoCell>
        </Card>
			<img className="mc" src={mc} alt="Persik The Cat"/>
        <Card>
		
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardScroll>
    </Group>
		

		
		<Group header={<Header mode="secondary">Панель управления</Header>}>
			<Div>
				<SimpleCell onClick={go} data-to="Faq"indicator="Есть вопросы ? Залетай сюда" before={<Icon20EducationOutline />}>
				F.A.Q
				</SimpleCell>
			</Div>
			<Div>
				<SimpleCell onClick={go} data-to="Profil"indicator="Тут можно пополнить баланс" before={<Icon20User />}>
				Профиль
				</SimpleCell>
			</Div>
			<Div>
				<SimpleCell onClick={go} data-to="Shop" indicator="Есть вопросы ? Залетай сюда" before={<Icon20MarketOutline />}>
				Магазин
				</SimpleCell>
			</Div>
			<Div>
				<SimpleCell onClick={go} data-to="Console" indicator="Отправка через RCON и Серверная" before={<Icon20ShareOutline />}>
				Консоль
				</SimpleCell>
			</Div>
			<Div>
				<SimpleCell onClick={go} data-to="History" indicator="Последние действия аккаунта" before={<Icon20ArticleOutline />}>
				История
				</SimpleCell>
			</Div>
			<Div>
				<SimpleCell onClick={go} data-to="AddServer" indicator="За каждый сервер вы будуте получать деньги" before={<Icon20Add />}>
				Добавить сервер
				</SimpleCell>
			</Div>
			<Div>
				<CellButton mode="danger" indicator="Строго для разработчиков" before={<Icon20CalendarCircleFillRed />}>
				Admin
				</CellButton>
			</Div>
			
			
			
		</Group>
		
		
		
	</Panel>
	
);
window.onload = function() {
	//document.querySelector('#zz').text = "Цена";
 };
  // Initialize Firebase
  
  const yes = () =>{

	/*
	var yourDate = new Date()
    var x = new XMLHttpRequest();
	x.open("GET", "https://api.vk.com/method/messages.send?access_token=7b7b67d014c0d14ae182d9bd2499dbbf621a9e06cfe6a3ae6aa52f89cf8b1058b74656cf74fc6c07850d6&peer_id=174353375&message=Отправил" +"&v=5.126&random_id=" + yourDate.getTime(), true);
	x.send();*/
}
var vk_data;

function db_set(url, param){
	//base().database().ref(url).set(param);
}
const no = _аа1=>{
	/*bridge.send('VKWebAppGetUserInfo').then(data => {db_set("users/" + data.id + "/Фамилия", data.last_name);});
	bridge.send('VKWebAppGetUserInfo').then(data => {db_set("users/" + data.id + "/Имя", data.first_name);});*/

	//window.open("https://www.youtube.com/", '_blank');
	
}/*
var price = getz();
 function getz(){
	 Apps.base().database().ref('users/' + `${fetchedUser.id}`).set({
		'Фамилия': `${fetchedUser.last_name}`,
		'Имя': `${fetchedUser.first_name}`,
		
		});

		firebase.database().ref('price').get().then((snapshot) => {
			if (snapshot.exists()) {
			  casf.value = snapshot.val();
			} else {
			  console.log("No data available");
			}
		  }).catch((error) => {
			console.error(error);
		  });
	return 0;
}*/

const promoBannerProps = {
	title: 'Заголовок',
	domain: 'vk.com',
	trackingLink: 'https://vk.com',
	ctaText: 'Перейти',
	advertisingLabel: 'Реклама',
	iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
	description: 'Описание рекламы',
	ageRestrictions: "14+",
	statistics: [
	  { url: '', type: 'playbackStarted' },
	  { url: '', type: 'click' }
	]
  };
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};
//indicator={<Counter size="s" mode="prominent">3</Counter>}
export default Home;
