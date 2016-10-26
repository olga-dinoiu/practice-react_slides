var Backbone = require('backbone');
var olga = require('../templates/olga.hbs');

module.exports = Backbone.View.extend({
    className: 'slide-thumbnail-view',
    render: function () {
        this.$el.html(olga({variabila: 333}));

        return this;
    }
});