const fn = require('./index');
const expect = require('chai').expect;

describe('pac', () => {
    it('is a function', () => {
        expect(fn).to.be.a('function');
    });
    it('returns test-b if called with true', () => {
        expect(fn(true)).to.eql({"test-b": true});
    });
    it('returns test-a if called with false', (done) => {
        fn(false)(function (data) {
            expect(data).to.eql({"test-a": true});
            done();
        });
    });
});
