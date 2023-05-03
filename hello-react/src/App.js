import ConditionalRendering from "./components/ConditionalRendering";
import DoNotRenderUndefined from "./components/DoNotRenderUndefined";
import InlineStyle from "./components/InlineStyle";

function App() {
  return (
    <div className="conditionalRender">
      {/* <ConditionalRendering /> */}
      {/* <DoNotRenderUndefined /> */}
      <InlineStyle />
    </div>
  );
}

export default App;
