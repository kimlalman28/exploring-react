import React from 'react';
import {
	Link,
	Route
} from 'react-router-dom';

function Topic(props) {
	return (
		<div>
			<h1>{props.match.params.topicId}</h1>
			<h4>Kim</h4>
		</div>
	)
}

export default function Topics({ match }) {
	return (
		<div>
			<h2>TOPICS</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/component`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/propsvsstate`}>Props vs State</Link>
				</li>
			</ul>

			<hr />

			{/*<Route path='/topics/rendering' component={Topic} />
			<Route path='/topics/components' component={Topic} />
			<Route path='/topics/propsvsstate' component={Topic} />*/}
			<Route path={`${match.path}/:topicId`} component={Topic} />
			<Route exact path={match.url} render={()=> {
				return <h3>Please select a topic</h3>
			}} />

		</div>
	)
}