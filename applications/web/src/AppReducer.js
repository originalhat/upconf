import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";

let initialState = {
  conferences: [
    {name: 'Four Paws; One Meow'}
  ],

  presentations: [
    {topic: 'Feline philology'}
  ],

  users: [
    {name: 'Toby', role: 'conference-admin'}
  ]
};

const conferences = (state = initialState.conferences, action) => {
  return state;
};

const presentations = (state = initialState.presentations, action) => {
  return state;
};

const users = (state = initialState.users, action) => {
  return state;
};

export default (history) => combineReducers({
  router: connectRouter(history),
  conferences,
  presentations,
  users,
});