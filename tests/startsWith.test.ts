import { startsWith } from "../index";
test('Check if startsWith() works for Unicode strings', () => {
    expect(startsWith('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣😒👌₦lizætiøn☃', 'Iñtërnâtiônà🏋️‍o✌')).toBe(true);
    expect(startsWith('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣😒👌₦lizætiøn☃', '₦lizætiøn☃', -10)).toBe(true);
    expect(startsWith('谢谢你', '谢谢你')).toBe(true);
    expect(startsWith('谢谢你', '')).toBe(true);
    expect(startsWith('谢谢你', '谢')).toBe(true);
    expect(startsWith('', '😎')).toBe(false);
    expect(startsWith('🙌⬅🛡', '🙌⬅🛡😘🎂🎂🤣😒👌₦🎂🎂🎂🎂')).toBe(false);
    expect(startsWith('😍🎁😂🎉🐱‍👤🙌🕸👮‍♀️🧔🍤🥟✈🛰💌💘', '😍🎁😂🎉')).toBe(true);
    expect(startsWith('😍🎁😂🎉🐱‍👤🙌🕸👮‍♀️🧔🍤🥟✈🛰💌💘', '👮‍♀️🧔🍤🥟')).toBe(false);
    expect(startsWith('谢谢你', '谢谢你', 0)).toBe(true);
    expect(startsWith('谢谢你', '谢谢你', 1)).toBe(false);
    expect(startsWith('谢谢你', '谢谢你', 0)).toBe(true);
    expect(startsWith('谢谢你', '谢谢你', -1)).toBe(false);
    expect(startsWith('谢谢你', '谢谢你', -3)).toBe(true);
    expect(() => startsWith('谢谢你', '谢谢你', 3)).toThrow(RangeError);
    expect(() => startsWith('谢谢你', '谢谢你', -4)).toThrow(RangeError);
});