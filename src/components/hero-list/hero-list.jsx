import React, {Component} from 'react'; 
import HeroCard from '../heroCard/heroCard.jsx'

export default class HeroList extends Component {
	render(){
		let heroes = this.props.heroes.map((hero, i) => {
			return(
			<HeroCard key ={i} data={hero} />
				)
		})

	return(
	<>
		 <div className="container">
		<h1>Список героев</h1>
		<div className = "row">
			{heroes}
			</div>
			</div>
		</>


	)	
}
}