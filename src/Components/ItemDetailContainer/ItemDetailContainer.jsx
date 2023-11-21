/* eslint-disable react/prop-types */
import './ItemDetailContainer.css'

export const ItemDetailContainer = ({product}) => {
  console.log(product)
  return (
    <div className='w-screen min-h-[85svh] flex gap-20 items-center py-10 px-20 bg-primary/10'>
        <figure>
            <img className='max-h-[75svh]' src={product.thumbnail} alt="" />
        </figure>
        <div className='flex flex-col gap-3'>
            <h1 className='text-4xl'>{product.title}</h1>
            <span>{product.brand} - {product.category}</span>
            <p className='p-0 my-5'>{product.description}</p>
            <span className='text-[16px]'>Rating: {product.rating}</span>
            <span className='text-[16px]'>Stock: {product.stock}</span>
            <span className='text-[16px]'>Price: ${product.price}</span>
            <button className='w-fit px-10 py-1 mt-5 bg-secondary'>Add to Cart</button> 
        </div>
    </div>
  )
}
