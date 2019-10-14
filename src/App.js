import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import MyForm from './myForm';
import TodoListItems from './todoListItems';
import TopBar from './topBar/TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function App() {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  const handleSubmit = text => {
    const item = { text, id: items.length + 1, isMarked: false };
    setItems([item, ...items]);
  };

  const handleItemClick = id => {
    const item = items.find(item => item.id === id);
    item.isMarked = !item.isMarked;

    setItems([...items]);
  };

  return (
    <div className="app">
      <TopBar/>
      <Paper className={classes.root}>
        <MyForm onSubmitFired={handleSubmit} />
        <TodoListItems items={items} onItemWasClicked={handleItemClick} />
      </Paper>
    </div>
  );
}

export default App;
