const bugsnag = require("bugsnag");

const BrestBugsnag = {

    init: function(brest, callback) {
        bugsnag.register(brest.getSetting('bugsnag.key'), brest.getSetting('bugsnag.options'));
        brest.getApp().use(bugsnag.requestHandler);
        brest.getApp().use(bugsnag.errorHandler);
        callback();
    }

};

module.exports = BrestBugsnag;