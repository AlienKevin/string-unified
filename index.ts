import GraphemeSplitter from "grapheme-splitter";

export function length(str: string): number {
    return new GraphemeSplitter().countGraphemes(str);
}

export function charAt(str: string, index: number): string {
    const arr = new GraphemeSplitter().splitGraphemes(str);
    const length: number = arr.length;
    return arr[processIndex(index, length)];
}

export function substring(str: string, start: number, end?: number): string {
    const arr = new GraphemeSplitter().splitGraphemes(str);
    const length: number = arr.length;
    if (end === undefined) {
        end = length;
    }
    return arr.slice(processIndex(start, length), processIndex(end, length, 0, 1)).join("");
}

function processIndex(index: number, length: number, leftOffset?: number, rightOffset?: number) {
    checkIndexInRange(index, length, leftOffset, rightOffset);
    if (index >= 0) {
        return index;
    } else {
        return length + index;
    }
}

function checkIndexInRange(index: number, length: number, leftOffset: number = 0, rightOffset: number = 0) {
    if (length + rightOffset <= index || index < -length + leftOffset) {
        throw new RangeError(`Index of ${index} is out of range from ${-length} to ${length - 1}!`);
    }
}
