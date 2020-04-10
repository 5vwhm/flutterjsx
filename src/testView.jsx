const style = {
  wrapper: {
    padding: "32.0",
    margin: 32,
    color: "#000000",
  }, 
  text: {
    fontSize: 20,
  },
};

export default (
  <Container {...style.wrapper}>
    <Text style={style.text} text={"This is a simple text"} />
  </Container>
);
