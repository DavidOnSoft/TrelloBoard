import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Links } from 'react-router';
import List from './List';


class TrelloBoard extends Component {
    render() {
        return ( <
            div className = "app" >
            <
            Link tp = "/new"
            className = "float-button" > + < /Link> <
            List id = 'todo'
            title = "To Do"
            cards = {
                this.props.cards.filter((card) =>
                    card.status === "todo")
            }
            />

            <
            List id = 'in-progress'
            title = "In Progress"
            cards = {
                this.props.cards.filter((card) =>
                    card.status == "in-progress")
            }
            />  <
            List id = 'done'
            title = 'Done'
            cards = {
                this.props.cards.filter((card) =>
                    card.status == "done")
            }
            />        { this.props.children } < /
            div >
        )
    }
}
TrelloBoard.propTypes = { cards: PropTypes.arrayOf(PropTypes.object) };

export default DragDropContext(HTML5Backend)(TrelloBoard);