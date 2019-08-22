import { length } from "../index";
test('Check if length works for Unicode strings', () => {
    expect(length('Iñtërnâtiônàlizætiøn☃')).toBe(21);
    expect(length('あ')).toBe(1);
    expect(length('谢')).toBe(1);
    expect(length('سلام خوبی؟')).toBe(10);
});