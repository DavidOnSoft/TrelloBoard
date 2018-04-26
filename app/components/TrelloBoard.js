import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';
import List from './List';


class TrelloBoard extends Component
{
    constructor() {
        super(...arguments);
        this.state = {
            cards : [],
            children : null,
        };
    }

    componentDidMount() {
        this.setState({
            cards: this.props.cards,
            children : this.props.children
        });
    }

    render() {
        return (
            <div className="app">
                <Link to="/new" className="float-button"> + </Link>
                <List id='todo'title="To Do" cards={ this.state.cards.filter((card) => card.status === "todo") }/>
                <List id='in-progress' title="In Progress" cards={ this.state.cards.filter((card) => card.status === "in-progress") }/>
                <List id='done' title = 'Done' cards = { this.state.cards.filter((card) => card.status === "done")}/>
                { this.state.children }
            </div >
        );
    }
}
TrelloBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default DragDropContext(HTML5Backend)(TrelloBoard);