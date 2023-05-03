function InlineStyle() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // 단위 생략하면 px로 지정.
  };
  return (
    <>
      <div style={style}>{name}</div>
    </>
  );
}

export default InlineStyle;
