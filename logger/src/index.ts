import {ok} from "assert";

export interface Logger {
    (message:string): void;
    (message:string, ...args:any[]): void;
    (...args:any[]): void;
}

export default function create(label:string, stream:NodeJS.WritableStream):Logger {
    return (...args:any[]) => {
        ok(args.length > 0, 'Arguments required for log function.');
        stream.write(JSON.stringify(Object.assign({label, message: args})));
    }
}
