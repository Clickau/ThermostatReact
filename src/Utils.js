export function getShortWeekdayNames() {
    var array = [];
    // 18 July 2021 was Sunday
    for (var i = 0; i < 7; i++) {
        var string = new Date(2021, 6, 18 + i).toLocaleString(undefined, { weekday: 'short' });
        array.push(string);
    }
    return array;
}

export function getWeekdayInitials() {
    return getShortWeekdayNames().map(el => el[0].toUpperCase());
}