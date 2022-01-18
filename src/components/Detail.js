import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

function Detail(props){
    let history = useHistory();
    let { id } = useParams();
    let product = props.shoes.find(function(shoes){
        return shoes.id +1  == id 
    })

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{product.title}</h4>
            <p>상품설명: { product.content }</p>
            <p> { product.price} 원</p>
            <a className="btn btn-warning" onClick={()=>{history.goBack()}}>뒤로가기</a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Detail