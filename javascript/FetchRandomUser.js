import React, { Component } from "react";

export default class FetchPhoto extends Component {
    state = {
        loading: true,
        person: null
    };
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            person: data.results[0],
            loading: false
        });
    }
    render() {
        if (this.state.loading) {
            return <div> loading...</div>;
        }
        return <div>{this.state.person.name.title}</div>;
    }
}
