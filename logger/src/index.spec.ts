import * as test from 'tape';
import logger from './index';
import {Writable} from "stream";

test('Create logger', t => {
    const results = [
        '{"label":"Label","message":["Something went wrong"]}',
        '{"label":"Label","message":["Foo",{"foo":"bar"}]}'
    ];
    
    const writer = new Writable();
    Reflect.defineProperty(writer, '_write', {
        value: (data, enc, cb) => {
            const actual = data.toString();
            const expected = results.shift();
            t.equal(expected, actual, 'written data should equal to ' + expected);
            cb();
            if (results.length === 0) {
                t.end();
            }
        }
    });
    
    const log = logger('Label', writer);
    t.ok(typeof log === 'function', '"log" should be a function');
    t.throws(() => {
        log();
    }, 'log() should throw an error');
    
    log('Something went wrong');
    log('Foo', {foo: 'bar'});
});

