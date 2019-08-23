import { substring } from "../index";
test('Check if length works for Unicode strings', () => {
    expect(substring('Iñtërnâtiônàlizætiøn☃', 4)).toBe('rnâtiônàlizætiøn☃');
    expect(substring('あ谢谢', 1, 2)).toBe('谢');
    expect(substring('谢😒🔬🔬🔬🔬', 4)).toBe('🔬🔬');
    expect(substring('谢😒🔬🔬🔬🔬', 0, 1)).toBe('谢');
    expect(substring('谢😒🔬🔬🔬🔬', 5, 6)).toBe('🔬');
    expect(substring('谢😒🔬🔬🔬🔬', 5, 5)).toBe('');
    expect(substring('谢😒🔬🔬🔬🔬', 0, 0)).toBe('');
    expect(substring('谢😒🔬🔬🔬🔬', 3, 3)).toBe('');
    expect(substring('谢😒🔬🔬🔬🔬', 4, 0)).toBe('');
    expect(substring('谢😒🔬🔬🔬🔬', 4, 2)).toBe('');
    expect(substring('谢😒🔬🔬🔬🔬', -6, -5)).toBe('谢');
    expect(substring('谢😒🔬🔬🔬🔬', -6)).toBe('谢😒🔬🔬🔬🔬');
    expect(() => substring('谢😒🔬🔬🔬🔬', 6)).toThrow(RangeError);
    expect(() => substring('谢', 1)).toThrow(RangeError);
    expect(() => substring('谢😒🔬🔬🔬🔬', -7)).toThrow(RangeError);
});