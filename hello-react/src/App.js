import ConditionalRendering from "./components/ConditionalRendering";
import DoNotRenderUndefined from "./components/DoNotRenderUndefined";
import InlineStyle from "./components/InlineStyle";
import ClassComponent from "./components/ClassComponent";
import MyComponent from "./components/MyComponent";
import UseSnippet from "./components/UseSnippet";
import PropsBasic from "./components/PropsBasic";
import ClassProps from "./components/ClassProps";

function App() {
  return (
    <div className="conditionalRender">
      {/* <ConditionalRendering /> */}
      {/* <DoNotRenderUndefined /> */}
      {/* <InlineStyle /> */}
      {/* <ClassComponent /> */}
      {/* <MyComponent />
      <UseSnippet /> */}
      {/* <PropsBasic name="React" favoriteNumber={1}>
        칠드런
      </PropsBasic> */}
      {/* <PropsBasic>리액트</PropsBasic> */}
      <ClassProps name="React" favoriteNumber={2}>
        칠드런테스트
      </ClassProps>
    </div>
  );
}

export default App;
