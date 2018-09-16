import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        //不能用普通的函数，因为这样this的指向不明确，要用箭头函数
        return(
            <div>
                <ul>
                    {/*{this.props.value.map(function (item) {
                        return <TodoItem ifComplete={item.complete} task={item.task} id={item.id} deleteContent={this.deleteContent}/>
                    })}*/}
                    {this.props.value.map( item => {
                        return <TodoItem ifComplete={item.complete} task={item.task} id={item.id} deleteContent={this.props.deleteContent}/>
                    })}
                </ul>
            </div>
        );
    }
}