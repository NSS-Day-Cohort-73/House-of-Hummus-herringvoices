const defaultState = {
        entreeId: 1,
        vegetableId: 1,
        sideId: 1
}

let transientState = {
    entreeId: 1,
    vegetableId: 1,
    sideId: 1
}

export const changeFunction = (type, event) =>{
    transientState[`${type}Id`] = parseInt(event.target.value)
}

export const placeOrder = async () =>{
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch('http://localhost:8088/purchases', postOptions)
    const orderEvent = new CustomEvent('newOrder')
    document.dispatchEvent(orderEvent)
    transientState = {...defaultState}
}