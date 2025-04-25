


export default function Book(props){

    return (
        <figure>
            <img src={`/${props.img}`} alt=""/>
            <figcaption>
                <p className="title">{props.title}</p>
                <p className="author">{props.author}</p>
                <p className="price">{props.price}</p>
            </figcaption>
        </figure>
    )

}