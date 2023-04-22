
export async function getExpenses(keyword: string, startDate: Date, endDate: Date) : Promise<string> {

    const start = formatDate(startDate)
    const end = formatDate(endDate)
    const resp = await fetch(`http://localhost:8000/extract/${keyword}?startDate=${start}&endDate=${end}`)
    if (!resp.ok) {
        throw Error(`Error getting expense from the api. Status: ${resp.status} Message: ${resp.text}`)
    }

    return resp.text()
}

// Because fucking JS has no library method for rudimentary date formatting
function formatDate(date: Date) : string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}