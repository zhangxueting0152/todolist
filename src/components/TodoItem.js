import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);

    }
    deleteContent = (e) => {
        let deleteId = e.target.value;
        this.props.deleteContent(deleteId);
    }
    render() {
        let task = this.props.task;
        let ifComplete = this.props.ifComplete;
        let checkIf = false;
        if (ifComplete === 'true'){
            task = <del>{task}</del>;
            checkIf = true;
        }
        return(
            <div>
                <input type="checkbox" checked={checkIf}/>
                {task}
                <button onClick={this.deleteContent} value={this.props.id}>删除</button>
            </div>
        )
    }
}