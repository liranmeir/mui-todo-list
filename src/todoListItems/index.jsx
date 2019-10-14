import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  striketrough: {
    textDecoration: 'line-through',
  },
}));

function TodoListItems(props) {
  const classes = useStyles();
  const { items } = props;

  const handleClick = (id)=>{
    props.onItemWasClicked(id)
  }

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {items.map((item, index) => (
        <ListItem button key={index}>
          <ListItemText
            primary={item.text}
            className={item.isMarked ? classes.striketrough : ''}
            onClick={()=>{handleClick(item.id)}}
          />
        </ListItem>
      ))}
    </List>
  );
}

TodoListItems.propTypes = {};

export default TodoListItems;
