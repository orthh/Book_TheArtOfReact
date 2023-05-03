function ConditionalRendering() {
  const name = "React";
  return (
    <>
      {name === "React" ? (
        <h1>
          리액트!<h2>!!</h2>입니다
        </h1>
      ) : (
        <h2>리액트아님!</h2>
      )}
      <h1>{name}asdasd</h1>
      <h2>asdasd22</h2>
      {name === "React" && <h1>리액트맞음!!</h1>}
    </>
  );
}

export default ConditionalRendering;
