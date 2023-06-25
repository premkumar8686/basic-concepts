import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./routing/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./routing/AboutUs";
import Services from "./routing/Services";
import NotThere from "./routing/NotThere";
// import MultipleUrlGet from "./https/axios/MultipleUrlGet";
// import { MyInterceptor1 } from "./https/interceptor/MyInterceptor1";
// import AxiosInstance from "./https/axios/AxiosInstance";
// import AxiosAwaitFetch from "./https/axios/AxiosAwaitFetch";
// import AxiosFetch from "./https/axios/AxiosFetch";
// import { MyInterceptor2 } from "./https/interceptor/MyInterceptor2";
// import AsyncAwait from "./https/AsyncAwait";
// import MethodFetch2 from "./https/MethodFetch2";
// import MethodFetch from "./https/MethodFetch";
// import FetchData from "./https/FetchData";
// import DynamicForm from "./forms/DynamicForm";
// import FormValidation from "./forms/FormValidation";
// import FormWithCallBackRef from "./hooks/FormWithCallBackRef";
// import FormWithRef from "./hooks/FormWithRef";
// import UseRef2 from "./hooks/UseRef2";
// import UseRef from "./hooks/UseRef";
// import UseEffect from "./lifecyclemethods/functionlifecyclemethods/UseEffect";
// import UnMounting from "./lifecyclemethods/UnMounting";
// import GetSnapshotBeforeUpdate from "./lifecyclemethods/GetSnapshotBeforeUpdate";
// import ShouldComponentUpdate from "./lifecyclemethods/ShouldComponentUpdate";
// import ClasslifeCycleMethodsDemo from "./lifecyclemethods/ClasslifeCycleMethodsDemo";
// import ComponentDidMount from "./lifecyclemethods/ComponentDidMount";
// import Memo from "./purecomponent/Memo";
// import FunctionalComponent from "./purecomponent/FunctionalComponent";
// import ClassPureComponent from "./purecomponent/ClassPureComponent";
// import Center from "./crud/Center";
// import ReactJsSearch from "./search/ReactJsSearch";
// import SweetAlert from "./sweet/SweetAlert";
// import Demo2 from "./states/Demo2";
// import Demo1 from "./states/Demo1";
// import SetStateDemo2 from "./states/SetStateDemo2";
// import SetState from "./states/SetState";
// import TextCount from "./states/TextCount";
// import InputHideShow from "./states/InputHideShow";
// import StateHideShow from "./states/StateHideShow";
// import FunctionState from "./states/FunctionState";
// import ClassState from "./states/ClassState";
// import MyPropTypes from "./proptypes/MyPropTypes";
// import PropsProducts from "./props/PropsProducts";
// import ClassProps from "./props/ClassProps";
// import PropsData from "./props/PropsData";
// import ForceUpdate from "./forceupdate/ForceUpdate";
// import ProductsMap from "./map/ProductsMap";
// import JsonDataRead from "./jsonfiledatareadandmap/JsonDataRead";
// import Map from "./map/Map";
// import Image from "./image/Image";
// import Expression from "./expression/Expression";
// import BootstrapIcons from "./bootstrapicons/BootstrapIcons";
// import ReactIcons from "./reacticons/ReactIcons";
// import Menu from "./components/bootstrap/Menu";
// import Css from "./components/css/Css";




function App() {
  // MyInterceptor1();
  // MyInterceptor2();
  return (
    <>
    {/* <Map /> */}
     {/* <Css /> */}
     {/* <Menu /> */}
     {/* <BootstrapIcons /> */}
     {/* <ReactIcons /> */}
     {/* <Expression /> */}
     {/* <Image /> */}
     {/* <ProductsMap /> */}
     {/* <JsonDataRead /> */}
     {/* <ForceUpdate /> */}
     {/* <PropsData name='Prem' /> */}
     {/* <PropsData name='kumar' /> */}
     {/* <ClassProps name='Prem' ok /> */}
     {/* <PropsProducts /> */}
     {/* <MyPropTypes  age={30} cars='tata' /> */}
     {/* <MyPropTypes name='Prem'>This is from Parent</MyPropTypes> */}
     {/* <ClassState /> */}
     {/* <FunctionState /> */}
     {/* <StateHideShow /> */}
     {/* <InputHideShow /> */}
     {/* <TextCount /> */}
     {/* <SetState /> */}
     {/* <SetStateDemo2 /> */}
     {/* <Demo1 /> */}
     {/* <Demo2 /> */}
     {/* <SweetAlert /> */}
     {/* <ReactJsSearch /> */}
     {/* <Center /> */}
     {/* <ClassPureComponent /> */}
     {/* <FunctionalComponent /> */}
     {/* <Memo /> */}
     {/* <ClasslifeCycleMethodsDemo myName='Kumar'/> */}
     {/* <ComponentDidMount /> */}
     {/* <ShouldComponentUpdate /> */}
     {/* <GetSnapshotBeforeUpdate /> */}
     {/* <UnMounting /> */}
     {/* <UseEffect /> */}
     {/* <UseRef /> */}
     {/* <UseRef2 /> */}
     {/* <FormWithRef /> */}
     {/* <FormWithCallBackRef /> */}
     {/* <FormValidation /> */}
     {/* <DynamicForm /> */}
     {/* <FetchData /> */}
     {/* <MethodFetch /> */}
     {/* <MethodFetch2 /> */}
     {/* <AsyncAwait /> */}
     {/* <AxiosFetch /> */}
     {/* <AxiosAwaitFetch /> */}
     {/* <AxiosInstance /> */}
     {/* <MultipleUrlGet /> */}
     <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='about-us' element={<AboutUs />} />
       <Route exact path='services' element={<Services />} />
       <Route path='*' element={<NotThere />} />
     </Routes>
    
    </>
  );
}

export default App;
