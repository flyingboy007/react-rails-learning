var Body = React.createClass({
    getInitialState: function () {
        return {items: []}
    },
    componentDidMount: function () {
        console.log('Component mounted');
        $.getJSON('/api/v1/items.json', (response) => {
            this.setState({items: response})
        });
    },

    handleSubmit: function (item) {
        var newState = this.state.items.concat(item);
        this.setState({items: newState});
    },

    handleDelete: function (id) {
        $.ajax({
            url: `api/v1/items/${id}`,
            type: 'DELETE',
            success: () => {
                this.removeItemClient(id);
            }
        });
    },

    handleUpdate: function (item) {
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: {item: item},
            success: () => {
                this.updateItems(item);
            }
        })
    },

    updateItems: function (item) {
        var items = this.state.items.filter((i) => { return i.id != item.id });
        items.push(item);

        this.setState({items: items });
    },

    removeItemClient: function (id) {
        var newItems = this.state.items.filter(function (item) {
            return item.id != id;
        });


        this.setState({items: newItems});
    },


    render: function () {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});