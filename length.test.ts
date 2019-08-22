import { length } from "./index";
test('Counts international strings correctly', () => {
    expect(length('Iñtërnâtiônàlizætiøn☃')).toBe(21);
    expect(length('あ')).toBe(1);
    expect(length('谢')).toBe(1);
    expect(length('سلام خوبی؟')).toBe(10);
});