import React from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": "1",
                    "task": "做一个TodoList Demo",
                    "complete": "false"
                },{
                    "id": "2",
                    "task": "学习ES6",
                    "complete": "false"
                }, {
                    "id": "3",
                    "task": "Hello React",
                    "complete": "true"
                }, {
                    "id": "4",
                    "task": "找工作",
                    "complete": "false"
                }
            ],
            addData: ''
        };
    }
    generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }
    addContent = (e) => {
        let addData = e.target.value;
        this.setState({
            addData: addData
        });
    }
    submitAdd = () => {
        let submitData = this.state.data.concat([{
            "id": this.generateGUID(),
            "task": this.state.addData,
            "complete": "false"
        }]);
        this.setState({
            data: submitData,
            addData: ''
        });
    }
    deleteContent = (deleteId) => {
        let data = this.state.data.filter(item => item.id !== deleteId);
        this.setState({
            data: data
        });
    }
    render() {
        return(
            <div>
                <TodoList value={this.state.data}  deleteContent={this.deleteContent}/>
                <TodoAdd addContent={this.addContent} submitAdd={this.submitAdd} value={this.state.addData}/>
            </div>
        );
    }
}