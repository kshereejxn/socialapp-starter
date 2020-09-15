import React, { Component } from 'react';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                Name: "",
                Password: ""
            }
        }
    }
    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })

    }
    render() {

        if (this.state.submitted) {
            return (
                <div>
                    Thank you, {this.state.formData.firstName}, for submitting the form <br />
                    <button onClick={this.resetForm}>Login</button>
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor=""> Name</label>
                        <input onChange={this.handleChange} type="text" name="Name" value={this.
                            state.formData.Name} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input onChange={this.handleChange} type="text" name="Password" value={this.
                            state.formData.Password} />
                    </div>
                    <button>Login</button> <br />
                    {this.state.formData.Name}
                    <br />
                    {this.state.formData.Password}
                </form>

            </div>
        );
    }

}
export default User;