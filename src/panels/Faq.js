import React from 'react';
import PropTypes from 'prop-types';

import { MiniInfoCell, Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { Icon20Info } from '@vkontakte/icons';

import './default.css';

const Faq = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>
		<Group>
		<MiniInfoCell
            before={<Icon20Info />}
            mode="more"
			onClick={props.go} data-to="home"
          >
            Как пополнить баланс
          </MiniInfoCell>
		  <MiniInfoCell
            before={<Icon20Info />}
            mode="more"
			onClick={props.go} data-to="home"
          >
            Как пополнить баланс
          </MiniInfoCell>
		  <MiniInfoCell
            before={<Icon20Info />}
            mode="more"
			onClick={props.go} data-to="home"
          >
            Как пополнить баланс
          </MiniInfoCell>
		  
		</Group>
		
	</Panel>
);

Faq.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Faq;
