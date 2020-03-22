import React, { Component } from 'react'
import PropTypes from 'prop-types';





export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = { textValue: '' }
    }
    /* 定义props属性类型 */
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    render() {
        const { textValue } = this.state;
        return (
            <div>
                <input  placeholder="请添加任务" value={textValue}
                        onKeyDown={ (event)=>this.headerAddTodo(event)}
                        onChange={ (event)=>this.changeTextValue(event) } />
            </div>
        );
    }

    changeTextValue(event){
        this.setState( { textValue: event.target.value } ) // 读取数据、更新状态
    }

    headerAddTodo(event){
        if(event.keyCode === 13 && this.state.textValue !== ""){
            const todo = { title: this.state.textValue, flag: false };
            this.props.addTodo(todo);
            // 添加完成之后，清除this.state.value
            this.setState({ textValue: '' } )
        }
    }
}