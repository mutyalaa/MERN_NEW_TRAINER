import React from "react";
import ChildComponent from './Component/ChildComponent'
import ContactManager from "./Contact-Manager/Comp";
import ApiCall from "./ApiCall.js";
import ClothingCategory from "./Clothing-electronic/ClothingCategory.js";
import ElectronicCategory from "./Clothing-electronic/ElectronicCategory.js";
import ImgSearchApi from "./ImgSearchApi.js";
import clothing from "./Clothing-electronic/clothing.js";
import productDetails from "./Clothing-electronic/electronic.js"
import LifeCycleMethods from "./Components/LifeCycleMethod";
import PureComp from "./Components/PureComponent";
import StateDemo from "./Components/StateDemo.js";
import RootComp from "./Components/RootComponent.js";
import ToDoComp from "./to-do-app/ToDoComp.js";
import FormElements from "./FormExamples/FormElement.js";
import { BrowserRouter, Link,NavLink, Rout, Routes } from "react-router-dom";
import SignInComp from "./FormExamples/SignInComponent.js";
import AfterSubmit from "./FormExamples/AfterSubmit.js";
import Board from "./ScoreBoard/Board.js";
import RankSort from "./ScoreBoard/RankSort.js";
import AgeSort from "./ScoreBoard/AgeSort.js";
import ScoreSort from "./ScoreBoard/ScoreSort.js";
import NameSort from "./ScoreBoard/NameSort.js";
import LoginPage from "./NestedRoutes/LoginPage.js";
import DashBoard from "./Components/ChildComponents/DashBoard.js";
import UserPage from "./NestedRoutes/UserPage.js";
import PageNotFound from "./NestedRoutes/PageNotFOund.js";
import LoginPageFunc from "./RouterHooks/LoginPageFunc.js";
import DashBoardHooks from "./RouterHooks/DashBoardHooks.js";
import InvalidUsername from "./RouterHooks/Invalid.js";
Import 

function App() {
  return (
    <>
    <div className="App">
      {/* <ChildComp></ChildComp> */}
      {/* <Comp></Comp> */}
      {/* <ContactManager></ContactManager> */}

      {/* <ClothingCategory data={clothing}></ClothingCategory>
      <p>-------------------------------------------------------------------------------</p>
      <ElectronicCategory data={productDetails}></ElectronicCategory> */}

      {/* <ApiCall></ApiCall> */}

      {/* <ImgSearchApi></ImgSearchApi> */}

      {/* <LifeCycleMethods msg='value from dsp method'></LifeCycleMethods> */}
      {/* <PureComp></PureComp> */}
      {/* <StateDemo></StateDemo> */}
      {/* <RootComp></RootComp> */}
      {/* <ToDoComp></ToDoComp> */}

      {/* <FormElements></FormElements> */}
      {/* <SignInComp></SignInComp> */}
      {/* <AfterSubmit></AfterSubmit> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Board></Board>}></Route>
          <Route path='/rank' element={<RankSort></RankSort>}></Route>
          <Route path='/name' element={<NameSort></NameSort>}></Route>
          <Route path='/age' element={<AgeSort></AgeSort>}></Route>
          <Route path='/points' element={<ScoreSort></ScoreSort>}></Route>

        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>

        <Routes>
          <Route path='/' element={<UserPage></UserPage>}>
            <Route path='login' element={<LoginPage></LoginPage>}></Route>
            <Route path='dashboard' element={<DashBoardComp userData = {{userName: 'likhi', role: 'sde'}}></DashBoardComp>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          </Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

      </BrowserRouter> */}

      <BrowserRouter>

        <NavLink to='/'>
          {
            ({isActive})=>
            (
              <button className={isActive?'activeStatus':'.inActiveStatus'}>Login</button>
            )
          }
        </NavLink>

        <NavLink to='/dashboard/:username/:role'>
          {
            ({isActive})=>
            (
              <button className={isActive?'activeStatus':'.inActiveStatus'}>dashboard</button>
            )
          }
        </NavLink>

        <Routes>
          <Route path='/' element={<LoginPageFunc></LoginPageFunc>}></Route>
          <Route path='/dashboard/:username/:role' element={<DashBoardHooks></DashBoardHooks>}></Route>
          <Route path='/*' element={<InvalidUsername></InvalidUsername>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
