import React from 'react'

class Searchbox extends React.Component {
	render() {
		return (
			<div>
				<input 
				className="my-2 form-control" 
				type="search" 
				placeholder="Search robots"
				onChange={this.props.searchChange}/>
			</div>
		)
	}
}

export default Searchbox