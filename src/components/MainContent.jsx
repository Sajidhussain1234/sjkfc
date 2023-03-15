import React from 'react'
import CardDesign from './CardDesign';

const MainContent = () => {
    let kfcData = [
        {
            id: 1,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
            title: "Krunch Burger",
            description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250
        },
        {
            id: 2,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
            title: "Krunch With Fries N Drink",
            description: "Krunch With Fries N Drink Amazing! Krunch + 1 regular Fries + 1 regular Drink",
            price: 470
        },
        {
            id: 3,
            imgUrl: "https://images.kfcpakistan.com/image/1664273664824-image.png",
            title: "Mighty Zinger",
            description: "Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese",
            price: 670
        },
        {
            id: 4,
            imgUrl: "https://images.kfcpakistan.com/image/1670410761440-image.jpg",
            title: "Xtreme Duo Box",
            description: "Combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
            price: 1340
        },
        {
            id: 5,
            imgUrl: "https://images.kfcpakistan.com/image/1670409072074-image.jpg",
            title: "Rice N Spice",
            description: "Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
            price: 350
        },
        {
            id: 6,
            imgUrl: "https://images.kfcpakistan.com/image/1664220042613-image.png",
            title: "Krunch Burger + Drink",
            description: "Very tasty pack with on a reasonable price 1 Krunch burger + 1 regular drink",
            price: 340
        },
        {
            id: 7,
            imgUrl: "https://images.kfcpakistan.com/image/1670410283442-image.jpg",
            title: "Chicken N Chips",
            description: "2 pieces of Hot and Crispy Fried Chicken+ fries+ dinner roll+ signature Vietnamese Sauce",
            price: 480
        },
        {
            id: 8,
            imgUrl: "https://images.kfcpakistan.com/image/1670408306192-image.jpg",
            title: "3 Pcs Chicken",
            description: "Three Pcs chicken fillet, spicy mayo 3 pieces of Hot and Crispy Fried Chicken",
            price: 550
        },
        {
            id: 9,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
            title: "Krunch Burger",
            description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250
        },
        {
            id: 10,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
            title: "Krunch Burger",
            description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250
        },
        {
            id: 11,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
            title: "Krunch Burger",
            description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250
        },
        {
            id: 12,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
            title: "Krunch Burger",
            description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250
        }
    ]; 
    return (
        <div>            
            <h2 className='text-center text-white'> <u>Available products are: </u></h2>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {/* className="row row-cols-1 row-cols-md-3 g-4" */}
                {kfcData.map((element) => {
                    return (
                        <div className='co-md-4' key={element.id}>
                            <CardDesign img={element.imgUrl} title={element.title} description={element.description} price={element.price} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainContent