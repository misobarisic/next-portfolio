export function SortAlphabetically(a, b) {
    let fa = a.toLowerCase(),
        fb = b.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
}

export function SortReverseAlphabetically(a, b) {
    let fa = a.toLowerCase(),
        fb = b.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
}
