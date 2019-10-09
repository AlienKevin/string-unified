import { indexOf } from "../index";
test('Check if indexOf() works for Unicode strings', () => {
    expect(indexOf('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', '👌₦lizætiøn☃')).toBe(19);
    expect(indexOf('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍️🤣😒👌₦lizætiøn☃', 'æ', -10)).toBe(24);
    expect(indexOf('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍', -30)).toBe(0);
    expect(indexOf('谢谢你', '谢谢你')).toBe(0);
    expect(indexOf('谢谢你', '')).toBe(0);
    expect(indexOf('谢谢你', '你')).toBe(2);
    expect(indexOf('', '😎')).toBe(undefined);
    expect(indexOf('', '')).toBe(0);
    expect(indexOf('🎂🎂', '🙌⬅🛡😘🎂🎂🤣😒👌₦🎂🎂🎂🎂')).toBe(undefined);
    expect(indexOf('🙌⬅🛡😘🎂🎂🤣😒👌₦🎂🎂🎂🎂', '🎂🎂')).toBe(4);
    expect(indexOf('😍🎁😂🎉🎶🙌🕸👮🧔🍤🥟✈🛰💌💘', '✈🛰💌💘')).toBe(11);
    expect(indexOf('😍🎁😂🎉🎶🙌🕸👮🧔🍤🥟✈🛰💌💘', '👮🧔🍤🥟')).toBe(7);
    expect(indexOf('谢谢你', '谢谢你', 2)).toBe(undefined);
    expect(indexOf('谢谢你', '谢谢你', 1)).toBe(undefined);
    expect(indexOf('谢谢你', '谢你', 1)).toBe(1);
    expect(indexOf('谢谢你', '谢谢你', 1, 2)).toBe(undefined);
    expect(indexOf('谢谢你', '谢你', 1, 3)).toBe(1);
    expect(indexOf('谢谢你', '谢谢你', -1)).toBe(undefined);
    expect(indexOf('谢谢你', '你', -1)).toBe(2);
    expect(indexOf('谢谢你', '谢谢你', -3)).toBe(0);
    expect(indexOf('谢谢你', '谢谢你', -3, -2)).toBe(undefined);
    expect(indexOf('谢谢你', '谢谢你', 3)).toBe(undefined);
    expect(indexOf('谢谢你', '谢谢你', -4)).toBe(0);
    expect(indexOf('👩‍👩‍👧‍👦', '👧‍')).toBe(undefined);
    expect(indexOf('👩‍👩‍👧‍👦', '👩‍👩‍')).toBe(undefined);
});