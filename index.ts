import GraphemeSplitter from "grapheme-splitter";

export function length(str: string): number {
    return new GraphemeSplitter().countGraphemes(str);
}

export function charAt(str: string, index: number): string {
    const arr = new GraphemeSplitter().splitGraphemes(str);
    const length: number = arr.length;
    return arr[processIndex(index, length)];
}

function processIndex(index: number, length: number) {
    checkIndexInRange(index, length);
    if (index >= 0) {
        return index;
    } else {
        return length + index;
    }
}

function checkIndexInRange(index: number, length: number) {
    if (length <= index || index < -length) {
        throw new RangeError(`Index of ${index} is out of range from ${-length} to ${length - 1}!`);
    }
}
