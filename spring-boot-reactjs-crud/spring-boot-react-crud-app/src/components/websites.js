import React from 'react';
import { Link } from 'react-router-dom';

class Websites extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {websites: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'title', label: 'Title' },
			{ key: 'url', label: 'URL' }
		];
		this.deleteWebsite = this.deleteWebsite.bind(this);
	}
	
	componentDidMount() {
		fetch('http://localhost:8080/websites')
			.then(response => {
				return response.json();
			}).then(result => {
				console.log(result);
				this.setState({
					websites:result
				});
			});
	}
	
	deleteWebsite(id) {
		if(window.confirm("Are you sure want to delete?")) {
			fetch('http://localhost:8080/website/delete/' + id)
				.then(response => {
					if(response.status === 200) {
						alert("Website deleted successfully");
						window.location.href = '/';
					}
			 });
		}
	}
	
	render() {
		if(this.state.websites && Object.keys(this.state.websites).length > 0) {
			return (
				<div id="container">
					<Link to="/create">Add Website</Link>
					<p/>					
					<table>
						<thead>
							<tr>
							{
								this.headers.map(function(h) {
									return (
										<th key = {h.key}>{h.label}</th>
									)
								})
							}
							  <th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.websites.map(function(item, key) {
								return (
									<tr key = {key}>
									  <td>{item.id}</td>
									  <td>{item.title}</td>
									  <td>{item.url}</td>
									  <td>
											<Link to={`/update/${item.id}`}>Edit</Link>
											&nbsp;<button onClick={this.deleteWebsite.bind(this, item.id)}>Delete</button>
									  </td>
									</tr>
												)
								}.bind(this))
							}
						</tbody>
					</table>
				</div>
			)
		} else {
			return (
				<div id="container">
					<Link to="/create">Add Website</Link><p/>
					<div style={{color:'red'}}>No record found</div>
				</div>
			)
		}
	}
}

export default Websites;