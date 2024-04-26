import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Jogo Adivinha Palavra</h1>
      <p>Clique no botão para começar o jogo</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
  );
};

export default StartScreen;