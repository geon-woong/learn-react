import React from 'react'
import { useHistory, useParams, } from 'react-router-dom'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import '../style/Detail.scss'

function Detail(props){
    let [boxstate, setboxstate] = useState(true)
    
    useEffect(() => {
      let 타이머 = setTimeout(()=>{
        setboxstate(false)
      },1000)
    }, )

    let 박스 = styled.div`
        background-color:pink;
        padding:100px`

    let 제목 = styled.h4`
        font-size:5rem;
        color: ${props => props.색상};
        `
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
            { 
                              boxstate === true ? 
                                <박스>
                                  <제목 색상="gray">dd</제목>
                                </박스>
                              : null
            }
          </div>
        </div>
      </div>
    )
  }
  
  export default Detail