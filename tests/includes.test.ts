import { includes } from "../index";
test('Check if includes() works for Unicode strings', () => {
    expect(includes('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', '👌₦lizætiøn☃')).toBe(true);
    expect(includes('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍️🤣😒👌₦lizætiøn☃', 'æ', -10)).toBe(true);
    expect(includes('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍', -30)).toBe(true);
    expect(includes('谢谢你', '谢谢你')).toBe(true);
    expect(includes('谢谢你', '')).toBe(true);
    expect(includes('谢谢你', '你')).toBe(true);
    expect(includes('', '😎')).toBe(false);
    expect(includes('', '')).toBe(true);
    expect(includes('🎂🎂', '🙌⬅🛡😘🎂🎂🤣😒👌₦🎂🎂🎂🎂')).toBe(false);
    expect(includes('🙌⬅🛡😘🎂🎂🤣😒👌₦🎂🎂🎂🎂', '🎂🎂')).toBe(true);
    expect(includes('😍🎁😂🎉🎶🙌🕸👮🧔🍤🥟✈🛰💌💘', '✈🛰💌💘')).toBe(true);
    expect(includes('😍🎁😂🎉🎶🙌🕸👮🧔🍤🥟✈🛰💌💘', '👮🧔🍤🥟')).toBe(true);
    expect(includes('谢谢你', '谢谢', 0, 2)).toBe(true);
    expect(includes('谢谢你', '谢谢你', 0, 1)).toBe(false);
    expect(includes('谢谢你谢谢你', '谢谢你', 3, 3)).toBe(false);
    expect(includes('谢谢你谢谢你', '谢谢', 3, -1)).toBe(true);
    expect(includes('🏳️‍🌈', '🏳️‍')).toBe(false);
    expect(includes('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘', 'Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍')).toBe(true);
    expect(includes('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘', 'Ǫ̵̹̻̝̳͂̌̌͘')).toBe(true);
    expect(includes('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘', "L")).toBe(false);
    expect(includes('谢谢你', '谢谢你', 3)).toBe(false);
    expect(includes('谢谢你', '谢谢你', -4)).toBe(true);
});