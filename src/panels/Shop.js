import React from 'react';
import PropTypes from 'prop-types';
import {IconButton,Card , Panel, PanelHeader, Header, Button, Group, Text, PanelHeaderBack, Avatar, Link, Switch, CardGrid, Input, FormStatus, SimpleCell} from '@vkontakte/vkui';
import { Icon20VotestTransferCircleFillTurquoise } from '@vkontakte/icons';
import { Icon20MoneyCircleOutline } from '@vkontakte/icons';
import { Icon20ShareOutline } from '@vkontakte/icons';
import { Icon20RotateRight } from '@vkontakte/icons';
import { Icon24ComputerOutline } from '@vkontakte/icons';
import './default.css';

const Shop = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>
    
    <Group mode="plain" header={<Header mode="secondary">Магазин сервиса</Header>}>
    <Group mode="plain">
          <SimpleCell indicator="Количество серверов" before={<Icon24ComputerOutline />}>
          <Input min="1" defaultValue="1" max="100" type="number"/>
          </SimpleCell>
          <SimpleCell indicator="Отправка по RCON" before={<Icon20RotateRight />}>
          <Switch disabled ></Switch>
          </SimpleCell>
          <SimpleCell indicator="Отправка через сервис" before={<Icon20ShareOutline />}>
          <Switch />
          </SimpleCell>

          <SimpleCell indicator="Скидка 60р" before={<Icon20MoneyCircleOutline />}>
          Цена: 440р
          </SimpleCell>
        </Group>
      </Group>
      <Group mode="plain">
      <Button size="l" stretched mode="secondary">Оплатить</Button>
      
        
      </Group>
		
	
	</Panel>
);

Shop.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Shop;
