import React from 'react';
import PropTypes from 'prop-types';
import {IconButton,Card , Panel, PanelHeader, Header, WriteBarIcon, Group, WriteBar, PanelHeaderBack, Avatar, Div, Switch, CardGrid, Input, CellButton , SimpleCell} from '@vkontakte/vkui';

import { Icon20ReplyOutline } from '@vkontakte/icons';
import { Icon28VoiceOutline } from '@vkontakte/icons';
import './default.css';

const Console = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>

		</PanelHeader>
		<Group
        header={<Header>Сервера онлайн</Header>}
      >
        <SimpleCell 
          after={<IconButton><Icon20ReplyOutline/></IconButton>} 
          description="Онлайн 1071" 
          before={<Avatar size={32} mode="app" />}
        >
          mm.migosmc.ru
        </SimpleCell>
        <SimpleCell 
          after={<IconButton ><Icon20ReplyOutline/></IconButton>} 
          description="Онлайн 639" 
          before={<Avatar size={32} mode="app" />}
        >
          	supermc.su
        </SimpleCell>
    
      </Group>
	  <Group
        header={<Header>Консоль</Header>}
		>
			
		<WriteBar
            
            placeholder="Команда"
			after={
				<WriteBarIcon mode="send" />
			  }
          />
		  <CardGrid>
          <Card size="s">
		  		<Div style={{ paddingBottom: 60, color: 'gray' }}>
		  			Ответ сервера
			  	</Div>
          </Card>
        </CardGrid>
		</Group>
	  
		
	
	</Panel>
);

Console.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Console;
