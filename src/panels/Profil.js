import React from 'react';
import PropTypes from 'prop-types';
import {IconButton,Card , Panel, PanelHeader, Header, Counter, Group, Cell, PanelHeaderBack, Avatar, Link, Switch, FormItem, Input, FormStatus, SimpleCell} from '@vkontakte/vkui';
import { Icon20VotestTransferCircleFillTurquoise } from '@vkontakte/icons';
import { Icon20MoneyCircleOutline } from '@vkontakte/icons';
import { Icon20GiftOutline } from '@vkontakte/icons';
import { Icon20MoneyTransferOutline } from '@vkontakte/icons';
import './default.css';

const Profil = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>
		<Group header={<Header mode="secondary">Баланс</Header>}>


		  <Cell before={<Icon20VotestTransferCircleFillTurquoise />} indicator={<Counter mode="primary">3486</Counter>}>Монеты</Cell>
		<Cell before={<Icon20MoneyCircleOutline />} indicator={<Counter mode="primary">12</Counter>}>Рубли</Cell>


		
		</Group>
		<Group header={
     <Header
       indicator={<Counter size="s" mode="prominent">666</Counter>}

     >
       Мои рефералы
     </Header>}
   >
     <SimpleCell  description="Временно без авы. Нужно сделать!">Test user</SimpleCell>
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
	  <Cell before={<Icon20MoneyTransferOutline />}>Перейти к оплате</Cell>
    </Group>
	<Group>
	<SimpleCell indicator="В очереди на 604 месте" before={<Icon20GiftOutline />}>
            Стать в очередь на бесплатный сервер
          </SimpleCell>
		</Group>
	
	</Panel>
);

Profil.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Profil;
