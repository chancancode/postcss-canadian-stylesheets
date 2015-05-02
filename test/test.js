var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        done();
    });
};

describe('postcss-canadian-stylesheets', function () {

    /* Write tests here

    it('does something', function (done) {
        test('a{ }', 'a{ }', { }, done);
    });*/

});
