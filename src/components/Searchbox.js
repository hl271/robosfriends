import React from 'react'

class Searchbox extends React.Component {
	render() {
		return (
			<div className="sticky">
				<input 
				className="my-4 d-block mx-auto text-center w-50 form-control-lg bg-dark text-white border border-secondary" 
				type="search" 
				placeholder="Search robots"
				onChange={this.props.searchChange}
				/>
			</div>
		)
	}
}

export default Searchbox