import { useForm } from "react-hook-form";
import "./styles.css"

const CardRegister = ({ products, setProducts, cart, setCart }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit=(data)=>{
      setProducts([...products, data])
  }

  const handleAddToCart = (code) => {
    const addProd = products.find((prod) => code === prod.code);
    setCart([...cart, addProd]);
    console.log(cart)
  };

  return (
    <div className="container_register">
      <div className="container_cadProd">
        <h2>Cadastrar produto</h2>
        <form className="form_search" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Código do produto" {...register("code")} />
          <input placeholder="Nome do produto" {...register("name")} />
          <input
            placeholder="Descrição do produto"
            {...register("description")}
          />
          <input placeholder="Valor do produto" {...register("price")} />
          <input placeholder="Desconto do produto" {...register("discount")} />
          <button>Cadastrar</button>
        </form>
      </div>
      <div>
        <h2>Produtos</h2>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <p>Código: {item.code}</p>
              <p>Nome: {item.name}</p>
              <p>Descrição: {item.description}</p>
              <p>Preço: R$ {item.price}</p>
              <p>Disconto: R$ {item.discount}</p>
              <button>Remover da Lista</button>
              <button onClick={() => handleAddToCart(item.code)}>
                Adicionar no Carrinho
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardRegister;
