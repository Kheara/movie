// Macaron.js

/*import React, { Component } from 'react'
// react에 "component"라는 것을 가져와서 사용 하겠다.
export class Macaron extends Component {

 // react의 component를 상속할것이다.
  render() {//render는 화면에 그려지는 것을 의미
    return (
     // return은 되돌린다. 라는 의미
      <div>Macaron</div>
    )
  }
}

export default Macaron*/

// react snifit을 설치 했을 경우 rec만 치면 위에 처럼 나온다.
//반드 Appcomponet안에만 있어야한다.

//----------------------------

// 함수형 컴포넌트 rfce
//함수형은 return만 있고 클래스형은 render 안에  return함수가 있다. 라는 차이점이 있다.

/*import React from 'react';

function Macaron(props) {
  console.log(props); // props를 콘솔에 출력하여 확인할 수 있습니다.
  return (
    <div>
      <h1>NO. {props.propsid}</h1>
      <h2>Name: {props.propsname}</h2>
      <img src={props.propsimages} alt="{props.propsname}" width={200} height={200} />
    </div>
  );
}*/

//==============================

/* 
import React from 'react';

function Macaron(props) {
  console.log(props); // props를 콘솔에 출력하여 확인할 수 있습니다.
  const{propsname,propsid,propsimages}=props;//구조분해할당
  //각각의 속성들을 분해 해서 내보내준다.
 return (
    <div>
      <h1>NO. {props.propsid}</h1>
      <h2>Name: {props.propsname}</h2>
      <img src={props.propsimages} alt="{props.propsname}" width={200} height={200} />
    </div>
  );
}
*/
import React from 'react';

function Macaron({propsname,propsid,propsimages}) {
 return (
    <div>
      <h1>NO. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <img src={propsimages} alt="{props.propsname}" width={200} height={200} />
    </div>
  );
}
export default Macaron;