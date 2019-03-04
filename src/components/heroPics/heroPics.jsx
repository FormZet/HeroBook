import React from 'react';
import HeroCard from '../heroCard/heroCard.jsx';


export default class HeroPics extends React.Component {
	render() {
		let heroes = this.props.pics.map(image => {
			return(
				<div className="col-md-3">
					<div className="card">
						<div className="card-body">
							<img src={image}/>
						</div>
					</div>
			)
		});

		return(
			<>
				<div className="container">
					<h1>Список героев</h1>
					<div className="row">
						{heroes}
					</div>
				</div>
			</>
			)	
		}
	}



