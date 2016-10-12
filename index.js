const bugsnag = require("bugsnag");

const BrestBugsnag = {

    init: function(brest, callback) {
        brest.getApp().use(bugsnag(brest.getSetting('bugsnag.key')));
        callback();
    }

};

module.exports = BrestBugsnag;