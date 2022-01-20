import React from 'react';
import { connect } from 'react-redux';

function Cart(props){
    return(
        <div>
            <h1>카트페이지</h1>
            {
                props.state.map((item,index)=>{
                    return (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.quan}</p>
                            <button onClick={()=>{ props.dispatch({type: '수량증가'}) }}> + </button>
                            <button onClick={()=>{ props.dispatch({type: '수량증가'}) }}> + </button>

                        </div>
                        )

                })
            }
        </div>
    )
}

function CartItem(props){
    return(
        <div>
        </div>


    )
}

// store 에서 지정된 state를 프롭스로 만들어 주는 함수.
function 함수(state){
    console.log(state)
    return{
        state : state.reducer,
        alertState: state.reducer2
    }
}
export default connect(함수)(Cart);
