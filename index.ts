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

export function startsWith(str: string, searchStr: string, start?: number): boolean {
    if (start === undefined) { // user doesn't specify starting index
        start = 0;
        try {
            start = processIndex(start, length(str));
        } catch(error) {
            return false;
        }
    } else {
        start = processIndex(start, length(str));
    }
    let result: boolean;
    try {
        const searchStrLength = length(searchStr);
        if (searchStrLength === 0) {
            return true; // empty string is always a substring of any string
        }
        result = substring(str, start, start + searchStrLength) === searchStr;
    } catch(error) {
        return false;
    }
    return result;
}

export function endsWith(str: string, searchStr: string, end?: number): boolean {
    const strLength: number = length(str);
    if (end === undefined) { // user doesn't specify starting index
        end = strLength;
        try {
            end = processIndex(end, strLength, 0, 1);
        } catch(error) {
            return false;
        }
    } else {
        end = processIndex(end, strLength, 0, 1);
    }
    let result: boolean;
    try {
        const searchStrLength = length(searchStr);
        if (searchStrLength === 0) {
            return true; // empty string is always a substring of any string
        }
        result = substring(str, end - searchStrLength, end) === searchStr;
    } catch(error) {
        return false;
    }
    return result;
}

export function indexOf(str: string, searchStr: string, start?: number) {
    const arr = new GraphemeSplitter().splitGraphemes(str);
    const searchArr = new GraphemeSplitter().splitGraphemes(searchStr);
    if (searchArr.length > arr.length) {
        return -1;
    }
    if (searchStr === "") {
        return 0;
    }
    let i: number;
    if (start === undefined) {
        i = 0;
    } else {
        i = processIndex(start, arr.length);
    }
    let j: number = 0;
    while (i <= arr.length - searchArr.length) {
        if (arr[i] === searchArr[j]) {
            while (j < searchArr.length && i < arr.length && arr[i] === searchArr[j]) {
                i++;
                j++;
            }
            if (j === searchArr.length) { // found the searchStr
                return i - j;
            } else {
                // reset back to start index
                i = i - j;
                j = 0;
            }
        }
        i++;
    }
    return -1;
}

export function includes(str: string, searchStr: string, start?: number) {
    return indexOf(str, searchStr, start) !== -1;
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
        throw new RangeError(`Index of ${index} is out of range from ${-length + leftOffset} to ${length - 1 + rightOffset}!`);
    }
}
