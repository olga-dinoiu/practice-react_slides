var SlideThumbnailView = require('./SlideThumbnailView');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    render: function () {
        var childView = new SlideThumbnailView();

        this.$el.html(childView.$el);

        childView.render();
    }
});