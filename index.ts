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
    return arr.slice(start, end).join("");
}

export function startsWith(str: string, searchStr: string, start?: number, end?: number): boolean {
    return substring(str, start, end).startsWith(searchStr);
}

export function endsWith(str: string, searchStr: string, start?: number, end?: number): boolean {
    return substring(str, start, end).endsWith(searchStr);
}

export function indexOf(str: string, searchStr: string, start?: number, end?: number) {
    const subArr = new GraphemeSplitter().splitGraphemes(str).slice(start, end);
    const searchArr = new GraphemeSplitter().splitGraphemes(searchStr);

    // edge cases
    if (searchArr.length > subArr.length) {
        return undefined;
    }
    if (searchStr === "") {
        return 0;
    }
    
    let i = 0;
    let j = 0;
    while (i <= subArr.length - searchArr.length) {
        if (subArr[i] === searchArr[j]) {
            while (j < searchArr.length && i < subArr.length && subArr[i] === searchArr[j]) {
                i++;
                j++;
            }
            if (j === searchArr.length) { // found the searchStr
                if (start < 0) {
                    start = processIndex(start, length(str));
                    if (start < 0) {
                        start = 0;
                    }
                }
                if (start === undefined) {
                    start = 0;
                }
                return start + (i - j);
            } else {
                // reset back to start index
                i = i - j;
                j = 0;
            }
        }
        i++;
    }
    return undefined;
}

export function lastIndexOf(str: string, searchStr: string, start?: number, end?: number) {
    const subIndex = substring(str, start, end).lastIndexOf(searchStr);
    if (subIndex < 0) {
        return undefined;
    } else {
        const offset = length(str.slice(0, subIndex));
        if (start < 0) {
            start = processIndex(start, length(str));
            if (start < 0) {
                start = 0;
            }
        }
        if (start === undefined) {
            start = 0;
        }
        return start + offset;
    }
}

export function includes(str: string, searchStr: string, start?: number, end?: number) {
    return indexOf(str, searchStr, start, end) !== undefined;
}

export function split(str: string, separator?: RegExp | string, limit?: number) {
    if (limit !== undefined && limit < 0) {
        throw new RangeError(`Limit must be a nonnegative number!`);
    }
    if (separator === "") {
        return new GraphemeSplitter().splitGraphemes(str).slice(0, limit);
    }
    return str.split(separator, limit);
}

export function match(str: string, regexp: RegExp | string): any[] {
    if (regexp === undefined) {
        return null;
    }
    if (typeof regexp === "string") {
        const index = indexOf(str, regexp);
        if (index !== -1) {
            let result: any = [regexp];
            result.index = index;
            result.input = str;
            result.groups = undefined;
            return result;
        } else {
            return null;
        }
    }
    // add unicode flag to input regexp
    const uRegexp = new RegExp(regexp.source, regexp.flags + (regexp.unicode ? "" : "u"));
    let result = str.match(uRegexp);
    if (result === null) { // not found
        return null;
    }
    let isAccepted;
    let index;
    if (!regexp.global) {
        let wholeMatch = "";
        isAccepted = result.every((group) => {
            if (index === undefined) {
                const wholeMatchIndex = indexOf(str, group);
                if (wholeMatchIndex === -1) return false;
                wholeMatch = group;
                index = wholeMatchIndex; // get the first group (whole match)'s index
                return true;
            } else {
                // the rest capture goups must be in the whole match
                return includes(wholeMatch, group);
            }
        });
    } else {
        let lastGroupIndex = 0;
        let lastGroupLength = 0;
        isAccepted = result.every((group) => {
            lastGroupIndex = indexOf(str, group, lastGroupIndex + lastGroupLength);
            if (lastGroupIndex === -1) return false;
            lastGroupLength = length(group);
            return true;
        });
    }
    if (isAccepted) {
        if (!regexp.global) {
            result.index = index;
        }
        return result;
    } else {
        return null; // some capture group doesn't exist in the string
    }
}

function processIndex(index: number, length: number, leftOffset?: number, rightOffset?: number) {
    if (index >= 0) {
        return index;
    } else {
        return length + index;
    }
}

