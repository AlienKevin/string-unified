import { match } from "../index";
test('Check if match() works for Unicode strings', () => {
    // test global flag off
    testMatch('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', '👌₦lizætiøn☃', ['👌₦lizætiøn☃'], 19, undefined);
    testMatch('', '😎', null);
    testMatch('', undefined, null);
    testMatch('For more information, see Chapter 3.4.5.1', /see (chapter \d+(\.\d)*)/i,
        ['see Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1'],
        22,
    );
    testMatch('For more information, see Chapter 3.🎪.🎭.🎭', /see (chapter \d+(\.[🎪🎭🎡])*)/i,
        ['see Chapter 3.🎪.🎭.🎭', 'Chapter 3.🎪.🎭.🎭', '.🎭'],
        22,
    );
    testMatch('🏳️‍🌈', /🌈/, null);
    testMatch('🏳️‍🌈', /🏳/, null);
    testMatch('🏁🏴⛳🚩🏳️‍🌈🎌', /🏳️‍🌈/, ['🏳️‍🌈'], 4);
    testMatch('🏁🏴⛳🚩🏳️‍🌈🎌', /[🏳️‍🌈🏴]/, ['🏴'], 1);
    testMatch('foo👋bar', /foo(.)bar/, ['foo👋bar', '👋'], 0)
    testMatch('a', /[💩-💫]/u, null);
    testMatch('💩', /.*?([💩-💫]).*/u, ['💩', '💩'], 0);
    testMatch('🏳️‍⛳🏳️‍🌈', /⛳(🏳️‍)🌈/, null);
    testMatch('', /./, null);

    // test global flag on
    testMatch('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', /🏳️‍🌈/g, ['🏳️‍🌈', '🏳️‍🌈', '🏳️‍🌈']);
    testMatch('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', /🏳️‍🌈[⛳🎌]/g, ['🏳️‍🌈⛳', '🏳️‍🌈🎌']);
    testMatch('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', /🌈/g, null);

    // test string
    testMatch('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', '🏳️‍🌈', ['🏳️‍🌈'], 1);

    // test named capture group
    testMatch('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', /(?<flag>🏳️‍🌈)/g, ['🏳️‍🌈', '🏳️‍🌈', '🏳️‍🌈']);
    testMatch('🏁🏳️‍🌈🏴🏳️‍🌈⛳🚩🏳️‍🌈🎌', /(?<flag>🏳️‍🌈)/, ['🏳️‍🌈', '🏳️‍🌈'], 1, { 'flag': '🏳️‍🌈' });
});

function testMatch(str: string, regex: RegExp | string, captures: string[], index?: number, groups?: { [name: string]: string }) {
    let arr: any = captures;
    if (arr !== null && regex !== undefined &&
        ((regex instanceof RegExp && !(regex as RegExp).global) || typeof regex === "string")) {
        arr.index = index;
        arr.input = str;
        if (groups) { // create null prototype cache object for storing name capture groups
            let nullPrototypeGroups = Object.create(null);
            Object.entries(groups).forEach(([key, value]) => {
                nullPrototypeGroups[key] = value;
            });
            arr.groups = nullPrototypeGroups;
        } else {
            arr.groups = undefined;
        }
    }
    console.log("TCL: testMatch -> match(str, regex)", match(str, regex))
    console.log("TCL: testMatch -> arr", arr)
    expect(match(str, regex)).toStrictEqual(arr);
}
