import { split } from "../index";
test('Check if split() works for Unicode strings', () => {
    expect(split('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', '😒')).toStrictEqual(['Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣', '👌₦lizætiøn☃']);
    expect(split('Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', '🤷‍🤦‍')).toStrictEqual(['Iñtërnâtiônà🏋️‍o✌', '🤣😒👌₦lizætiøn☃']);
    expect(split('🖼👚♐✡💫Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'n')).toStrictEqual(['🖼👚♐✡💫Iñtër', 'âtiô', 'à🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiø', '☃']);
    expect(split('🖼👚♐✡💫Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'n', 0)).toStrictEqual([]);
    expect(split('🖼👚♐✡💫Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'n', 1)).toStrictEqual(['🖼👚♐✡💫Iñtër']);
    expect(split('🖼👚♐✡💫Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'n', 2)).toStrictEqual(['🖼👚♐✡💫Iñtër', 'âtiô']);
    expect(split('🖼👚♐✡💫Iñtërnâtiônà🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiøn☃', 'n', 10)).toStrictEqual(['🖼👚♐✡💫Iñtër', 'âtiô', 'à🏋️‍o✌🤷‍🤦‍🤣😒👌₦lizætiø', '☃']);
    expect(split("", "")).toStrictEqual([]);
    expect(split('Hello👋 1 word. Sentence #️⃣ 2.', /(\d)/)).toStrictEqual(["Hello👋 ", "1", " word. Sentence #️⃣ ", "2", "."]);
    expect(split('😜🍚🍜🥗🥪')).toStrictEqual(['😜🍚🍜🥗🥪']);
    expect(split("👚♐✡😴🤑🤔😋🛴✈🚀⛩🏡🌫🌧☀🌘🔥", "❤")).toStrictEqual(["👚♐✡😴🤑🤔😋🛴✈🚀⛩🏡🌫🌧☀🌘🔥"]);
    expect(split("👚🔥🛡🎅👩‍🎓♐✡😴🤑🤔🔥🛡🎅👩‍🎓😋🛴✈🚀⛩🏡🌫🌧☀🌘🔥🛡🎅👩‍🎓", "🔥🛡🎅👩‍🎓")).toStrictEqual(["👚", "♐✡😴🤑🤔", "😋🛴✈🚀⛩🏡🌫🌧☀🌘", ""]);
    expect(split("👚♐✡", "")).toStrictEqual(['👚', '♐', '✡']);
    expect(split("啦你啦好啦世啦界！！？啦？！@#￥%……《》？*", '啦')).toStrictEqual(['', '你', '好', '世', '界！！？', '？！@#￥%……《》？*']);
});