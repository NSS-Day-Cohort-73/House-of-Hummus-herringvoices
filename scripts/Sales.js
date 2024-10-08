export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let salesDivs = sales.map(item => {
        let price = item.entree.price + item.vegetable.price + item.side.price
        price = price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        
        return `<div class='receipt'>
            Receipt #${item.id} = ${price}
        </div>`
    })

    return salesDivs.join('')
}
