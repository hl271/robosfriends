import React, {Component} from 'react'
import './Card.css'


class Card extends Component {
	render() {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
				<div className="card rounded my-3 text-center">
					<img className="card-img-top" src={`https://robohash.org/${this.props.id}`} alt="robots"/>
					<div className="card-body">
						<h3>{this.props.name}</h3>
						<p>{this.props.email}</p>
					</div>				
				</div>
			</div>			
		)
	}
}

export default Card