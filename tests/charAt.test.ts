import { charAt } from "../index";
test('Counts international strings correctly', () => {
    expect(charAt('Iñtërnâtiônàlizætiøn☃', 20)).toBe('☃');
    expect(charAt('Iñtërnâtiônàlizætiøn☃', 3)).toBe('ë');
    expect(charAt('Iñtërnâtiônà🏋️‍₦lizætiøn☃', 12)).toBe('🏋️‍');
    expect(charAt('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍♂️🤣😒👌₦lizætiøn☃', 15)).toBe('🤷‍');
    expect(charAt('helloあe', 6)).toBe('e');
    expect(charAt('谢谢你', 2)).toBe('你');
    expect(charAt('谢谢你', -1)).toBe('你');
    expect(charAt('谢谢你', -2)).toBe('谢');
    expect(charAt('谢谢你😊', -1)).toBe('😊');
    expect(charAt('谢谢你😊啦', -5)).toBe('谢');
    expect(() => charAt('谢谢你😊啦', -6)).toThrow(RangeError);
    expect(() => charAt('谢谢你😊啦', 10)).toThrow(RangeError);
    expect(() => charAt('Iñtërnâtiônàlizætiøn☃', 21)).toThrow(RangeError);
    expect(() => charAt('Iñtërnâtiônà🏋️‍₦lizætiøn☃', 23)).toThrow(RangeError);
});