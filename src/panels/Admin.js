import React from 'react';
import PropTypes from 'prop-types';
import {IconButton,Card , Panel, PanelHeader, Header, Button, Group, Text, PanelHeaderBack, Avatar, Link, Switch, CardGrid, Input, FormStatus, SimpleCell} from '@vkontakte/vkui';
import { Icon20VotestTransferCircleFillTurquoise } from '@vkontakte/icons';
import { Icon20MoneyCircleOutline } from '@vkontakte/icons';
import { Icon20ShareOutline } from '@vkontakte/icons';
import { Icon20RotateRight } from '@vkontakte/icons';
import { Icon24ComputerOutline } from '@vkontakte/icons';

import './default.css';

const Admin = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>
    
	</Panel>
);

Admin.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Admin;
