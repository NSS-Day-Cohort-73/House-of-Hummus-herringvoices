import { renderOptions } from "./renderOptions.js"
import { Sales } from "./Sales.js"

export const FoodTruck = async () => {


    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class='menu'>

        <section class='menu-entrees'>
        <h2>Entrees</h2>
        ${await renderOptions('entrees')}
        </section>

        <section class='menu-vegetables'>
        <h2>Vegetables</h2>
        ${await renderOptions('vegetables')}
        </section>

        <section class='menu-sides'>
        <h2>Sides</h2>
        ${await renderOptions('sides')}
        </section>

        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${await Sales()}
        </article>

    `
}
