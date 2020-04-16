import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
export default function MySurveyHeader() {
	return (
		<div>
			<Header as="h2">
				<Icon name="settings" />
				<Header.Content>
					My Surveys
					<Header.Subheader>Below you can see all your surveys</Header.Subheader>
				</Header.Content>
			</Header>
		</div>
	);
}
