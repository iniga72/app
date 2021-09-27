import React from 'react';
import PropTypes from 'prop-types';
import {Group,Header , Panel, PanelHeader, Cell, List, Text, PanelHeaderButton, Avatar, Link, Switch, CardGrid, Input, FormStatus, SimpleCell} from '@vkontakte/vkui';
import { Icon20VotestTransferCircleFillTurquoise } from '@vkontakte/icons';
import { Icon20MoneyTransferOutline } from '@vkontakte/icons';
import { Icon20ShareOutline } from '@vkontakte/icons';
import { Icon20ArticleOutline } from '@vkontakte/icons';
import { Icon20Stars } from '@vkontakte/icons';
import './default.css';

const History = props => (
	<Panel id={props.id}>
		<PanelHeader
              left={<PanelHeaderButton >Отмена</PanelHeaderButton>}
              
            >
              <SimpleCell>
				История
				</SimpleCell>
            </PanelHeader>
    
		<Group header={<Header mode="secondary">История</Header>}>
      <List>
        <Cell before={<Icon20VotestTransferCircleFillTurquoise/>} description="+534">Изменение баланса</Cell>
        <Cell before={<Icon20MoneyTransferOutline />} description="Отправка команд через сервер. -256">Покупка в магазине</Cell>
        <Cell before={<Icon20ShareOutline />} description="bc test">Отправка команл на сервер mm.migosmc.ru</Cell>
		<Cell before={<Icon20Stars />} description="+63р">Бонус за пополнение от Имя Фамилия</Cell>
      </List>
    </Group>
		
	
	</Panel>
);

History.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default History;
