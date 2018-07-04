import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({robots}) => {
	let robotsList = robots.map(robot => {
		return <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id}/>
	})
	return (
		<div className="row card-list">
			{robotsList}
		</div>
	)
}

export default CardList