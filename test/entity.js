var Q = require('q');
var expect = require('./chai_config').expect;
var sinon = require('sinon');
var t1 = require('../index');

var loadFixture = function(fixtureName) {
    var fs = require("fs");
    return fs.readFileSync(__dirname + '/fixtures' + '/' + fixtureName + ".json", "utf8");
};



describe("entity", function () {

    var connectionStub =  {};
    connectionStub.get = function() { };
    connectionStub.post = function() { };
    var sandbox, getStub, postStub;
    var parsedResult = "aisdaiusd";

    beforeEach(function() {
        sandbox = sinon.sandbox.create();
        getStub = sandbox.stub(connectionStub, "get").returns(Q(parsedResult));
        postStub = sandbox.stub(connectionStub, "post").returns(Q(parsedResult));
    });

    afterEach(function() {
        sandbox.restore();
    });

    describe("#get single campaign", function () {
        parsedResult = loadFixture('campaign');

        var campaign = new t1.Entity('campaign');

        it("should have a populated campaign entity", function () {
            campaign = campaign.get(10000, connectionStub);

            return expect(campaign).to.eventually
                    .have.deep.property('data.id', 10000) &&
                expect(campaign).to.eventually
                    .have.deep.property('data.entity_type', 'campaign')
        });

    });

});




