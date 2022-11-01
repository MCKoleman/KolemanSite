export function FindObj(list, id) {
    return list.find(proj => proj.id === id);
}

export function GetCurIndex(list, id) {
    return list.findIndex(proj => proj.id === id);
}

export function GetNextIndex(list, id) {
    let index = GetCurIndex(list, id);
    return (index + 1 >= list.length) ? 0 : index + 1;
}

export function GetPrevIndex(list, id) {
    let index = GetCurIndex(list, id);
    return (index - 1 < 0) ? list.length - 1 : index - 1;
}