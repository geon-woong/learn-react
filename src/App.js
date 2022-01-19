import React, { useState } from 'react';
import './App.css';
import data from './data'
import NavComponent from './components/Nav'
import Detail from './components/Detail'
import Banner from './components/Banner'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'

function App() {


  let [shoes, setShoes] = useState(data)


  return (
    <div className="App">

      <NavComponent></NavComponent>

      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} ></Card>
                })
              }
              <button onClick={

                async()=>{
                const response = await axios.get('https://codingapple1.github.io/shop/data2.json')
                setShoes([...shoes, ...response.data])
                console.log(shoes)
              }} className="btn btn-primary">more..</button>

            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>
      </Switch>


    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <a href={`/detail/${props.i +1}`}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4>name : {props.shoes.title}</h4>
      </a>
      <p>상품설명 & 가격</p>
      <p>{props.shoes.price} $</p>
      <p>{props.shoes.content}</p>
    </div>

  )
}

export default App;
