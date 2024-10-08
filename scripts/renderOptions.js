export const renderOptions = async (type) => {
    const response = await fetch(`http://localhost:8088/${type}`)
    const responseArray = await response.json()

    let html = responseArray.map(item => {
        if (item === responseArray[0]) {
            return `
            <div>
                <label for='${type}${item.id}'>
                    <input checked type='radio' name='${type}' value='${item.id}'>
                    ${item.name} <!-- Optionally include item name if available -->
                </label>
            </div>
            `
        } else {
            return `
            <div>
                <label for='${type}${item.id}'>
                    <input type='radio' name='${type}' value='${item.id}'>
                    ${item.name}
                </label>
            </div>
            `
        }
    }).join('')

    return html
}
