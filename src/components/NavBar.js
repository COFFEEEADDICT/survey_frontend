import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	render() {
		return (
			<Menu fluid="true" style={{ padding: '10px' }}>
				<Menu.Item>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="">My Surveys</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="">My Responses</Link>
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						<Link to="">Create Survey</Link>
					</Menu.Item>
				</Menu.Menu>
				<Menu.Menu>
					<Menu.Item>
						<Link to="">Sign In</Link>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}
export default NavBar;
