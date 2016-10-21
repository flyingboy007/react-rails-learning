var NewItem = React.createClass({
    handleClick: function () {
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        self = this;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: {item: {name: name, description: description}},
            success: function (item) {
                self.props.handleSubmit(item)
            }
        });
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="name" placeholder="Enter name of the item"/>
                <input type="description" ref="description" placeholder="Enter a description"/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});