


export default function Footer(){

    return (
        <footer>
            <div className="suscribe">
                <div className="suscribe-to">
                    <p>SUBSCRIBE TO OUR NEWS LETTER</p>
                    <p>Enter your email address</p>
                </div>
                <form action="">
                    <input type="email" placeholder="Email adress" id="email" name="email"/>
                    <input type="submit" value="Suscribe" id="suscribe" name="suscribe"/>
                </form>
            </div>
            <div className="medias">
                <h2><img src="/favicon1.png"/><div>BRAI<span>N</span> Library</div></h2>
                <nav>
                    <a href=""><img src="/linkedin.svg" alt=""/></a>
                    <a href=""><img src="/facebook.svg" alt=""/></a>
                    <a href=""><img src="/youtubekids.svg" alt=""/></a>
                </nav>
            </div>
        </footer>
    )

}