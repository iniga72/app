
import React from 'react';
import PropTypes from 'prop-types';
import {IconButton,Card , Panel, PanelHeader, Header, Counter, Group, Cell, PanelHeaderBack, Avatar, Link, Switch, FormItem, Input, FormStatus, SimpleCell} from '@vkontakte/vkui';
import { Icon20VotestTransferCircleFillTurquoise } from '@vkontakte/icons';
import { Icon20MoneyCircleOutline } from '@vkontakte/icons';
import { Icon20GiftOutline } from '@vkontakte/icons';
import { Icon20MoneyTransferOutline } from '@vkontakte/icons';
import './default.css';
import bridge from '@vkontakte/vk-bridge';
import qs from 'querystring';

const test = () =>{
  
  

  
  
  
  /*
  const startParams = new URLSearchParams(window.location.search)
  const userId = startParams.get("timestamp");*/
/*
  bridge.send("VKWebAppGetAuthToken", {"app_id": 7900201, "scope": "friends,groups"})
  .then(data => {
    // Обработка события в случае успеха
    console.log(data.access_token);
  })/*
  var paramsString = document.location.search; // ?page=4&limit=10&sortby=desc  
var searchParams = new URLSearchParams(paramsString);

  bridge.send("VKWebAppCopyText", {"text": searchParams.get("w")});*/
  //bridge.send("VKWebAppAllowNotifications");
  //
  //bridge.send("VKWebAppSetLocation", {"location": "hash1"});
 /* bridge
  .send('VKWebAppCreateHash')
  .then(data => {
    // Обработка события в случае успеха
    console.log(data.hash);
    console.log(data);
  })
  .catch(error => {
    // Обработка события в случае ошибки
  });*/
  /*bridge.send("VKWebAppGetAuthToken", {"app_id": 7900201, "scope": "friends,status"})
  .then(data => {
    // Обработка события в случае успеха
    console.log(data.access_token);
  })
  .catch(error => {
    // Обработка события в случае ошибки
  });*/
  //bridge.send("VKWebAppSetLocation", {"location": "hash2"});
  //bridge.send("VKWebAppCopyText", {"text": bridge.send('VKWebAppGetUserInfo').then(data => {data.sign})});
  
};
const V_menu = () =>{
  bridge.send("VKWebAppAddToFavorites")
};
const getreferalurl = () =>{
  //bridge.send("VKWebAppCopyText", {"text": "https://vk.com/app7900201#url"});
  bridge.send("VKWebAppSetLocation", {"location": "hash"});
};
const repost = () =>{
  //bridge.send("VKWebAppAllowNotifications");
  //console.log(bridge.send("VKWebAppAllowNotifications"));
  bridge.send("VKWebAppShowWallPostBox", {"message": "Hello!"});
};

const Profil = props => (
	<Panel id={props.id}>

		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>
		<Group header={<Header mode="secondary">Баланс</Header>}>


		  <Cell before={<Icon20VotestTransferCircleFillTurquoise />}  indicator={<Counter id="ggw" mode="primary">3486</Counter>}>Монеты</Cell>
		<Cell before={<Icon20MoneyCircleOutline />} indicator={<Counter mode="primary">12</Counter>}>Рубли</Cell>


		
		</Group>
		<Group header={
     <Header
       indicator={<Counter size="s" mode="prominent">666</Counter>}

     >
       Мои рефералы
     </Header>}
   >
     <SimpleCell before={<Avatar size={40} src="https://sun2.beltelecom-by-minsk.userapi.com\/s\/v1\/if1\/RvBkecNDFLX8xk7I4RtK6vKcdpaCAOsJO4EXPNjJyxQQLRBBr1s9AlriUdaa7ryfK26JB96v.jpg?size=50x50&quality=96&crop=195,0,824,824&ava=1" />}  description="Временно без авы. Нужно сделать!"> Test user</SimpleCell>
	 <SimpleCell  description="Временно без авы. Нужно сделать!">Test user</SimpleCell>
	 <SimpleCell  description="Временно без авы. Нужно сделать!">Test user</SimpleCell>

   </Group>
   <Cell disabled after={<Switch />}>
          Уведомления
        </Cell>
		
		<Group>
      <FormItem>
        <FormStatus header="Некорректная сумма" mode="error">
          показывать если не число (от 1 до 100к)
        </FormStatus>
      </FormItem>
      <FormItem top="Сумма для пополнения">
        <Input placeholder="500 (бонус за первый платёж х2)" />
      </FormItem>
	  <Cell onClick={test} before={<Icon20MoneyTransferOutline />}>Перейти к оплате</Cell>
    </Group>
	<Group>
	<SimpleCell indicator="В очереди на 604 месте" before={<Icon20GiftOutline />}>
            Стать в очередь на бесплатный сервер
          </SimpleCell>
          <SimpleCell onClick={V_menu} before={<Icon20GiftOutline />}>
            В меню
          </SimpleCell>
          <SimpleCell onClick={getreferalurl} before={<Icon20GiftOutline />}>
            Реферальная ссылка
          </SimpleCell>
		</Group>
	
	</Panel>
);

Profil.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Profil;
