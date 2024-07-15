import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

function Carrd(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOption = Object.keys(options)
    const [qty, setQty] = useState('1');
    const [size, setSize] = useState("")

    const handleCart = async () => {
        let food = []
        for (const item of data) {
          if (item.id === props.foodItem._id) {
            food = item;
    
            break;
          }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
            return
          }
          return
        }
    
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    
    
        // setBtnEnable(true)
    
      }
    
    

    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <>
            <div>
                <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: '150px', objectFit: 'fill' }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text"></p>

                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-info rounded' onChange={(e) => setQty(e.target.value)} style={{ select: "#FF0000" }}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <>
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        </>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100  bg-info rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)} style={{ select: "#FF0000" }}>
                                {priceOption.map((e) => {
                                    return (
                                        <>
                                            <option key={e} value={e}>{e}</option>
                                        </>
                                    )
                                })}
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                ₹{finalPrice}/-
                            </div>

                        </div>

                    </div>
                    <hr></hr>
                    <button className={`btn btn-warning w-10 h-10 `} onClick={handleCart} > Add to Cart</button>
                </div>
            </div>

        </>

    )
}

export default Carrd