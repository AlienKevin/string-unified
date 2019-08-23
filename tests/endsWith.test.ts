import { endsWith } from "../index";
test('Check if endsWith() works for Unicode strings', () => {
    expect(endsWith('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣😒👌₦lizætiøn☃', '👌₦lizætiøn☃')).toBe(true);
    expect(endsWith('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣😒👌₦lizætiøn☃', '🤣😒👌', -11)).toBe(true);
    expect(endsWith('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣😒👌₦lizætiøn☃', 'Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣', -13)).toBe(true);
    expect(endsWith('谢谢你', '谢谢你')).toBe(true);
    expect(endsWith('谢谢你', '')).toBe(true);
    expect(endsWith('谢谢你', '你')).toBe(true);
    expect(endsWith('', '😎')).toBe(false);
    expect(endsWith('🎂🎂', '🙌⬅🛡😘🎂🎂🤣😒👌₦🎂🎂🎂🎂')).toBe(false);
    expect(endsWith('😍🎁😂🎉🐱‍👤🙌🕸👮‍♀️🧔🍤🥟✈🛰💌💘', '✈🛰💌💘')).toBe(true);
    expect(endsWith('😍🎁😂🎉🐱‍👤🙌🕸👮‍♀️🧔🍤🥟✈🛰💌💘', '👮‍♀️🧔🍤🥟')).toBe(false);
    expect(endsWith('谢谢你', '谢谢你', 2)).toBe(true);
    expect(endsWith('谢谢你', '谢谢你', 1)).toBe(false);
    expect(endsWith('谢谢你', '谢谢你', -1)).toBe(true);
    expect(endsWith('谢谢你', '谢谢你', -3)).toBe(false);
    expect(() => endsWith('谢谢你', '谢谢你', 3)).toThrow(RangeError);
    expect(() => endsWith('谢谢你', '谢谢你', -4)).toThrow(RangeError);
});