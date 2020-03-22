import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'

import Header from './components/Header'
import ContentList from './components/ContentList'
import Footed from './components/Footed'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                    {title: '学习react', flag: false},
                    {title: '写案例', flag: false},
                    {title: '综合复习', flag: false}
                ],
            flagCount: 0
        }
    };
    render() {
        return (
          <div className="App">
            <Header addTodo={this.addTodo} />
            <ContentList checkedTodo={ this.checkedTodo } todos={ this.state.todos } delTodo={ this.delTodo } />
            <Footed todos={ this.state.todos } flagCount={ this.state.flagCount } updateTodosFlag={this.updateTodosFlag} deleteTodosByFlag={this.deleteTodosByFlag} />
          </div>
        );
    };

    deleteTodosByFlag = ()=>{
        let {todos} = this.state, flagCount = 0;
        // 获取todo.flag为true的内容，填充this.state
        todos = todos.filter(value =>{
            return !value.flag
        });
        console.info(todos);
        // 处理选中
        todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        this.setState( {todos, flagCount} );
    };

    updateTodosFlag = (flag)=>{
        const {todos} = this.state;
        let flagCount = 0;
        todos.forEach((value)=>{
            value.flag = flag;
        });
        // 处理选中
        todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        this.setState( {todos, flagCount} );
    };

    checkedTodo = (index, flag)=>{
        // 获取数据
        let todos = this.state.todos, flagCount = 0;
        // 根据index修改flag
        todos[index].flag = flag;
        // 处理选中
        todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        console.log("checkedTodo：",todos,flagCount);
        this.setState( {todos,flagCount} );
    };

    addTodo = (todo) => {
        let todos = this.state.todos;
        todos.unshift(todo);
        this.setState({todos });
    };

    delTodo = (index)=> {
        // 获取数据
        let todos = this.state.todos, flagCount = 0;
        // 删除对应数据
        todos.splice(index, 1);
        // 处理选中
        todos.forEach((item)=>{
            if(item.flag){
                flagCount++;
            }
        });
        console.log("delTodo：",todos,flagCount);
        this.setState( {todos,flagCount} );
    };



}





export default App;











