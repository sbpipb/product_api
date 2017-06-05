import React from 'react'

const Table = props => {
  const { products } = props


  let productList = products.map((product) => {
    let { name, id, price, description} = product
     return ( <tr key={id}>
                <td>{name}</td>
                <td>${price}</td>
                <td>{description}</td>
              </tr> )
   })

  return (
    <div className="col-md-10 panel panel-default">
        <table className="table table-hover ">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
        </table>
    </div>
  )
}

export default Table;
