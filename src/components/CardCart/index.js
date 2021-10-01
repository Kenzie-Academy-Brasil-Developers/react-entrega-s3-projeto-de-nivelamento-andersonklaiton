import "./styles.css"
const CardCart = ({ cart, setCart }) => {
    console.log(cart)
    let reducerPrice=0
    let reducerDiscount
    if(cart){

         reducerPrice = cart.reduce((acc, act)=>{
            let value = acc + Number(act.price)
            return Math.round(value*100)/100
        },0) 
        reducerDiscount = cart.reduce((acc, act)=>{
            let value = acc + Number(act.discount)
            return Math.round(value*100)/100
        },0)
        
    }

    const handleRemove=(code)=>{
        const rmProd = cart.filter((prod)=> code !== prod.code )
        setCart(rmProd)
    }



  return (
    <div className="your_cart">
        <h2>Seu Carrinho</h2>
        <p>Valor normal: R${reducerPrice}</p>
        <p>Valor do desconto: R${(reducerDiscount)}</p>
        <p>Valor com desconto: R${(Number(reducerPrice) - Number(reducerDiscount)).toFixed(2)}</p>
      {cart && cart.map((cart, index) => {
        return (
          <div key={index}>
            <p>Nome: {cart.name}</p>
            <p>Descrição: {cart.description}</p>
            <p>Valor: R${cart.price}</p>
            <p>Desconto: R${cart.discount}</p>
            <button onClick={()=>handleRemove(cart.code)}>Remover do Carrinho</button>
          </div>
        );
      })}
    </div>
  );
};
export default CardCart;
