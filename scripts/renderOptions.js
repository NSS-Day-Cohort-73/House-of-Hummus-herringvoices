export const renderOptions = async (type) => {
    const response = await fetch(`http://localhost:8088/${type}`)
    const responseArray = await response.json()

    let html = responseArray.map(item => {
        if (item === responseArray[0]) {
            //creates a checked input for the first item in the map
            return `
            <div>
                <label for='${type}${item.id}'>
                    <input checked type='radio' name='${type}' id='${type}${item.id}' value='${item.id}'>
                    ${item.name}
                </label>
            </div>
            `
        } else {
            //creates the rest of the inputs without 'checked'
            return `
            <div>
                <label for='${type}${item.id}'>
                    <input type='radio' id='${type}${item.id}' name='${type}' value='${item.id}'>
                    ${item.name}
                </label>
            </div>
            `
        }
    }).join('')

    return html
}
