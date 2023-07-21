import Card from "./Card"
const Tours = ({tours, removeTour}) => {

    return (
        <div>
        <h1>hello</h1>
            <div>
                Tour Destination
            </div>
            <div>
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour= {removeTour}></Card> 
                    })
                }
            </div>
        </div>
    )
}

export default Tours;