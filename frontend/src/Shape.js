function Shape(props) {
  const shapesJSX = props.stundas.map((stunda, indekss) => {
    return <Stunda key={indekss} nosaukums={stunda} />;
  });
  return (
    <>
      <h2 className={styles.violets}>{props.diena}</h2>
      <ol>{stundasJSX}</ol>
    </>
  );
}

export default Shape;
