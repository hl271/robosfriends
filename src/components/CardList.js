import React from 'react'
import Card from './Card'
import './CardList.css'
import {robots} from '../data'
console.log(robots)
const CardList = () => {
	let robotsList = robots.map(user => {
		return <Card key={user.id} name={user.name} email={user.email} id={user.id}/>
	})
	return (
		<div className="row card-list">
			{robotsList}
		</div>
	)
}

export default CardList