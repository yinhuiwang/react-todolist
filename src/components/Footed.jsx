import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Footed extends Component{
    static propTypes = {
        todos: PropTypes.array.isRequired,
        flagCount: PropTypes.number.isRequired,
        updateTodosFlag: PropTypes.func.isRequired,
        deleteTodosByFlag: PropTypes.func.isRequired
    };

    render() {
        const { todos, flagCount, deleteTodosByFlag } = this.props;

        return (
            <div>
                <span >全选：<input type="checkbox" checked={todos.length && flagCount === todos.length } onChange={ e=>this.footedUpdateTodosFlag(e) }/></span>
                <span >说明信息：{flagCount} / {todos.length}</span>
                <button type="button" onClick={ ()=> deleteTodosByFlag() }>清除已完成的任务</button>
            </div>
        );
    }

    footedUpdateTodosFlag(event){
        event.stopPropagation();
        let {updateTodosFlag} = this.props;
        let checked = event.target.checked;
        checked ? updateTodosFlag(true) : updateTodosFlag(false);
    }
}