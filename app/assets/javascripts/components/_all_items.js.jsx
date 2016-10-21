var AllItems = React.createClass({
    getInitialState: function () {
        return {items: []}
    },
    componentDidMount: function () {
        console.log('Component mounted');
        $.getJSON('/api/v1/items.json', (response) => {
            this.setState({items: response})
        });
    },
    render: function () {
        var items = this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            )
        });

        return (
            <div>
                {items}
            </div>
        )

    }
});