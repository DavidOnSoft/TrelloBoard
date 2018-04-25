import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import TrelloBoardContainer from './TrelloBoardContainer';
import TrelloBoard from './TrelloBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';


render(( < Router history = { createBrowserHistory() } > < Route component = { TrelloBoardContainer } > < Route path = "/"
            component = { TrelloBoard } > < Route path = "new"
            component = { NewCard }
            />        <Route path="edit/: card_id " component={EditCard} />      </Route>    </Route>  </Router> ), document.getElementById('root'));