var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    className: 'slide-thumbnail-view',
    render: function () {
        this.$el.html('eu sunt olga');

        return this;
    }
});