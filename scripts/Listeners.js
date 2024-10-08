export const addListeners = (firstFunction, secondFunction, thirdFunction) => {
    document.addEventListener('change', (event) => {
        const targetName = event.target.name
        if (targetName === 'entrees') {
            firstFunction('entree', event)
        }
        if (targetName === 'vegetables') {
            firstFunction('vegetable', event)
        }
        if (targetName === 'sides') {
            firstFunction('side', event)
        }
    })

    document.addEventListener('click', (clickEvent) => {
        if (clickEvent.target.id === 'purchase') {
            secondFunction()
        }
    })

    document.addEventListener('newOrder', thirdFunction)
}
