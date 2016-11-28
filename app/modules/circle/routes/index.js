module.exports = {
    path: 'items',
    getChildRoutes(location, callback) {
        require.ensure([], (require) => {
            callback(null, [
                require('./routes/item')
            ])
        });
    },
    getComponents(nextSate, callback) {
        require.ensure([], (require) => {
            callback(null, {
                header: require('./components/header.jsx'),
                main: require('./components/items.jsx'),
                footer: require('./components/footer.jsx')
            });
        });
    }
};
