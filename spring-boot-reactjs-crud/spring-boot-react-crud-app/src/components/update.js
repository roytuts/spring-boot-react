import React from 'react';
import { Link } from 'react-router-dom';

class Update extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {id: '', title: '', url: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
	fetch('http://localhost:8080/website/search/' + this.props.match.params.id)
		.then(response => {
			return response.json();
		}).then(result => {
			console.log(result);
			this.setState({
				id:result.id,
				title:result.title,
				url:result.url
			});
		});
  }
  
  handleChange(event) {
	  const state = this.state
	  state[event.target.name] = event.target.value
	  this.setState(state);
  }
  
  handleSubmit(event) {
	  event.preventDefault();
	  fetch('http://localhost:8080/website/update', {
			method: 'POST',
			body: JSON.stringify({
				id:this.state.id,
				title: this.state.title,
				url: this.state.url
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				if(response.status === 200) {
					alert("Website update successfully.");
					window.location.href = '/';
				}
			});
  }
  
  render() {
    return (
		<div id="container">
		  <Link to="/">Websites</Link>
			  <p/>
			  <form onSubmit={this.handleSubmit}>
				<input type="hidden" name="id" value={this.state.id}/>
					<p>
					<label>Title:</label>
						<input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
					</p>
					<p>
						<label>URL:</label>
						<input type="text" name="url" value={this.state.url} onChange={this.handleChange} placeholder="URL" />
					</p>
					<p>
						<input type="submit" value="Submit" />
					</p>
			  </form>
		   </div>
    );
  }
}

export default Update;