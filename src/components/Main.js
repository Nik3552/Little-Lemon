export default function Main() {
    return (
        <main>
            <div className="info-book">
                <div className="info-book-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are family owned
                        Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Book a table</button>
                </div>
                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOruaz7l_7Aq_Y2A91Ef43VTeMOH7zUdN9Q&s"></img>
            </div>
            <div className="specials">
                <div className="specials-info">
                    <h1>Specials of this week</h1>
                    <button>Online Menu</button>
                </div>

                <div className="cards-container">
                    <div className="card1 cards">
                        <img alt="" src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/umgxckeq/ea5503f5-7853-4f4f-97ee-8f5a50706d95.jpg"></img>
                        <div className="price">
                            <h2>Greek salad</h2>
                            <p>$12.99</p>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <p>Order a delivery</p>
                    </div>

                    <div className="card2 cards">
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPnv-4jJavjHTVmhS83KE925Brfj0eSm1IQ&s"></img>
                        <div className="price">
                            <h2>Bruchetta</h2>
                            <p >$ 5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <p>Order a delivery</p>
                    </div>

                    <div className="card3 cards">
                        <img alt="" src="https://www.jocooks.com/wp-content/uploads/2014/06/lemon-magic-cake-1-6-1.jpg"></img>
                        <div className="price">
                            <h2>Lemon Dessert</h2>
                            <p>$ 5.00</p>
                        </div>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p>Order a delivery</p>
                    </div>
                </div>
            </div>
        </main>
    )
}