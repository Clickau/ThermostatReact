const data = [{"eH":20,"eM":30,"repeat":"Weekly","sH":8,"sM":0,"setTemp":20.5,"weekDays":[2,3,4,5,6]},{"eD":27,"eH":17,"eM":0,"eMth":11,"eY":2020,"repeat":"Once","sD":27,"sH":15,"sM":37,"sMth":11,"sY":2020,"setTemp":20.0},{"eH":21,"eM":56,"repeat":"Daily","sH":9,"sM":15,"setTemp":29.0}, {"repeat":"Daily","setTemp":30,"sH":5,"sM":0,"eH":6,"eM":0},{"repeat":"Weekly","setTemp":15,"sH":6,"sM":10,"eH":7,"eM":10,"weekDays":[1,2,3]}];


export default fetchDummyData = async () => {
    await new Promise(r => setTimeout(r, 1000));
    const scheduleArray = data.map((item) => ({
        setTemp: item.setTemp,
        repeat: item.repeat,
        weekdays: item.weekDays, /* Sunday is day 1 */
        startDate: new Date(item.sY ?? 1970, item.sMth ?? 0, item.sD ?? 1, item.sH, item.sM), /* Months start from 0 */
        endDate: new Date(item.eY ?? 1970, item.eMth ?? 0, item.eD ?? 1, item.eH, item.eM),
    }));
    return scheduleArray;
}