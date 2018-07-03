import faker from 'faker'
export let robots = []
export class Robot {
	constructor(id, name, email) {
		this.id = id
		this.name = name
		this.email = email
	}
}

export function addRobots (number_of_robots) {
	for (let i=0; i<number_of_robots; i++) {
		robots.push(new Robot(i, faker.name.findName(), faker.internet.email()))
	}
}

addRobots(20)