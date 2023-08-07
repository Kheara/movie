/*
import Macaron from "./Macaron";
import cakes from "./cakes.json"
function App() {
  return ( //함수값을 되돌려주는 함수 
  <>
      <div className="App">안녕하세요!</div>

      {cakes.map(cake => (
        <Macaron
          propsid={cake.id}
          propsname={cake.name}
          propsimages={cake.images}
        />
      ))}
    </>
    
    //react는 굳이 div를 써줄필요는 없지만 css는 사용할수 없다.

    //Macaron 컴포넌트를 넣어줘서 맨위에 자동으로 import Marcon을 import해준다. 

    //안될경우 직접 써줘야한다.
  );
}
//<- 이것이 컴포넌트 이다.

export default App;
//위의 함수들을 밖으로 내보내는 함수


*/
//================================================
// import marcaron from ""

// import { render } from "@testing-library/react";
// import React, { Component } from "react";
// import Food from './Food';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
//   }

//   componentDidMount() {
//     console.log('componentDidMount함수는 화면이 새로 그려질 때(즉, 업데이트 될 때) 실행되는 함수');
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate함수는 화면이 새로 그려질 때(즉, 업데이트 될 때) 실행되는 함수');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount함수는 컴포넌트가 죽을 때 실행되는 함수');
//   }

//   state = {
//     count: 0,
//     sum: 0,
//     avg: 0,
//   }

//   add = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1,
//       sum: current.sum - 2,
//       avg: current.avg - 3,
//     }));
//   }

//   render() {
//     const { count } = this.state; // 구조 분해 할당
//     return (
//       <>
//         <div>App</div>
//         <h1>현재 숫자는 {count}입니다.</h1>
//         <button onClick={this.add}>더하기</button>
//         <button onClick={this.minus}>빼기</button>
//         <Food /> 
//       </>
//     );
//   }
// }

// export default App;

// =====================================
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import './style/App.css'

function App() {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
