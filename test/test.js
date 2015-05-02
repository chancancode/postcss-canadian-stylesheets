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

    it('converts colour to color', function (done) {
        test('a{ colour: white; }', 'a{ color: white; }', {}, done);
    });

    it('converts background-colour to color', function (done) {
        test('a{ background-colour: white; }', 'a{ background-color: white; }', {}, done);
    });

    it('converts border-colour to color', function (done) {
        test('a{ border-colour: white; }', 'a{ border-color: white; }', {}, done);
    });

    it('converts grey to gray', function (done) {
        test('a{ color: grey; }', 'a{ color: gray; }', {}, done);
    });

    it('converts lightgrey to lightgray', function (done) {
        test('a{ color: lightgrey; }', 'a{ color: lightgray; }', {}, done);
    });

    it('converts dimgrey to dimgray', function (done) {
        test('a{ color: dimgrey; }', 'a{ color: dimgray; }', {}, done);
    });

    it('converts !sorry to !important', function (done) {
        test('a{ color: gray !sorry; }', 'a{ color: gray !important; }', {}, done);
    });

    it('converts all the things', function (done) {
        test('a{ colour: grey !sorry; }', 'a{ color: gray !important; }', {}, done);
    });

});
