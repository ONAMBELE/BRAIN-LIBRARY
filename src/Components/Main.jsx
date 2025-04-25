import Book from "./Book";



export default function Main(){

    return (
        <main>
            <h1>NEW ARRIVALS</h1>
            <div className="search">
                <form action="" method="post">
                    <input type="search" name="search" id="search" placeholder="Search your favorite here"/>
                </form>
                <img src="/searxng.svg" alt="search"/>
            </div>
            <div className="main">
                
                <Book img="book-1.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-2.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-3.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-4.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-5.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-6.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-7.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>
                <Book img="book-8.png" title="DONALD WILLIAMS" author="DONATE A BOOK"  price="$100.00 $250.00"/>


            </div>
        </main>
    )

}