import React from 'react';
import Todo from './Todo.js';
import PropTypes from 'prop-types';

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo, index) => (
        <Todo key={index}
              onClick={() => onTodoClick(index)}
              {...todo}/>
      ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}


export default TodoList;