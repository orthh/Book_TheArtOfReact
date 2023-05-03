function DoNotRenderUndefined() {
  const name = undefined;
  return <>{name || "리액트"}</>;
}

export default DoNotRenderUndefined;
