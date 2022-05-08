export default function Card(prop){
    return ( 
        <div className="card" >
            <div className="cardHeadr">
                <img src={prop.url} alt="Avatar"/>
            </div>
            <div className="cardContant">
                <h4><b>{prop.content}</b></h4>
            </div>
            <div className="cardFooter">
                <p>{prop.price} </p>
            </div>
        </div>
    )
}