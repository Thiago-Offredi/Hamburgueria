import React, { useState, useRef } from "react";
import axios from 'axios';
import Burger from "./assets/burger.svg";
import Trash from "./assets/trash.svg";
import {
  Container,
  ContainerItens,
  ImagemCodeBurger,
  H1,
  InputsLabel,
  Inputs,
  Button,
  Pedido,
} from './styles'

const App = () => {

  const [pedidos, setPedidos] = useState([]);
  const inputOrder = useRef()
  const inputClientName = useRef()


  async function addNewOrder() {

    const data = await axios.post("http://localhost:3003/order", { order:inputOrder.current.value, clientName: inputClientName.current.value,});

    console.log(data);




    /* setPedidos([...pedidos, { id: Math.random(), order: inputOrder.current.value, clientName: inputClientName.current.value }])
         console.log(pedidos);*/


  }
  function deleteOrder(pedidoId) {
    const newOrdes = pedidos.filter(pedido => pedido.id !== pedidoId)
    setPedidos(newOrdes)
  }


  return (
    <Container>
      <ContainerItens>
        <ImagemCodeBurger alt="codeBurgerLogo" src={Burger} />
        <H1>Faça seu Pedido</H1>
        <InputsLabel><span>Pedido</span></InputsLabel>
        <Inputs ref={inputOrder} placeholder="1-Coca-Cola, 1-X Salada" />
        <InputsLabel>Nome do Cliente</InputsLabel>
        <Inputs ref={inputClientName} placeholder="Steve Jobs" />
        <Button onClick={addNewOrder}>Novo Pedido</Button>
        <ul>
          {pedidos.map(pedido => (
            <Pedido key={pedido.id}>
              <p>{pedido.order}</p> <br />
              <p className="client">{pedido.clientName}</p>
              <button onClick={() => deleteOrder(pedido.id)}>
                <img src={Trash} alt="Lixeira" />
              </button>

            </Pedido>
          ))

          }

        </ul>
      </ContainerItens>
    </Container>
  )

}
export default App


/*
, price: 44.50, status: "em preparação"
    <p>{pedido.price}</p>
              <button><img src={Trash} alt="Lixeira"/></button>
              <p>{pedido.status}</p>
              <button><img src={Trash} alt="Lixeira"/></button>
*/