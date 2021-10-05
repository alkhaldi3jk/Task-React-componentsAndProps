

 function product(props) {
   console.log(props.info)
    const info = props.info

    return (
        <div className="product">
            <img src={info.image} alt="" />
            <h5> {info.name}</h5>
            <p>{info.price} KD</p>
        </div>
    )
}

export default product