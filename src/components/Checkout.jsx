import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../firebase/Firebase'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loader, setLoader] = useState(false)
    const {cart, cartTotal, clear}= useCart()
    const navigate = useNavigate()
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }
 
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
           setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }
        
    }
    if(loader){
        return <p>Loading</p>
    }
  return (
    <div>
       {!orderId 
       ?<div>
       <h2>Finalizar tu alquiler</h2>
        <h4>Completa todos los campos</h4>
        <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
            <div class="mb-3">
                <label  className="form-label">Nombre Completo</label>
                <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
            </div>
            <div class="mb-3">
                <label  className="form-label">Numero de telefono</label>
                <input className="form-control"  type="number" placeholder='011 5555 5555' name="phone"  onChange={datosComprador} />
            </div>
            <div class="mb-3">
                <label  className="form-label">E-mail</label>
                <input className="form-control" type="email" placeholder='7-0gimnasiaXD@gmail.com' name="email"  onChange={datosComprador}/>
            </div>
            <button className="btn btn-primary" type='submit'>Finalizar Alquiler</button>
            {mensaje && <p style={{color:'red'}}> Completa todos los campos porfa</p>}
        </form>
       </div>
       :
       <div>
        <h2>Gracias por tu alquiler</h2>
        <h4>Su orden es: {orderId}</h4>
        <button className="btn btn-success" onClick={()=> navigate('/')}>Volver</button>
       </div>}
    </div>
  )
}

export default Checkout