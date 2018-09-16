import React from 'react';

export default class TodoAdd extends React.Component {
    constructor(props) {
        super(props);

    }
    addContent = (e) => {
        this.props.addContent(e);
    }
    submitAdd = () => {
        this.props.submitAdd();
    }
    render() {
        return(
            <div>
                <input type="text" onChange={this.addContent} value={this.props.value}/>
                <button onClick={this.submitAdd}>添加</button>
            </div>
        )
    }
}