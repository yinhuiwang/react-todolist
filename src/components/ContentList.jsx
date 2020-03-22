import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item'

export default class ContentList extends Component{
    /* 定义props属性类型 */
    static propTypes = {
        todos: PropTypes.array.isRequired,
        delTodo: PropTypes.func.isRequired,
        checkedTodo: PropTypes.func.isRequired
    };

    render() {
        const {todos, delTodo, checkedTodo} = this.props;
        return (
            <ul>
                { todos.map( (value, index)=> (
                    <Item key={index} todo={value} index={index} delTodo={delTodo} checkedTodo={checkedTodo}/>
                ) ) }
            </ul>
        );
    }
}