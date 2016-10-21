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


    render: function () {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items}/>
            </div>
        )
    }
});