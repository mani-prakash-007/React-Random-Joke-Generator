import { RandomJokeGenerator } from "./components/RandomJokeGenerator";

function App() {
  return (
    <div className="flex justify-center items-center h-screen  bg-yellow-500">
      <div className="flex flex-col justify-center items-baseline">
        <RandomJokeGenerator />
        <p className="font-bold text-red-500 text-xl mt-5">
          Note :{" "}
          <span className="text-white">
            I'm using Free API. So, Some Joke Datas will be 18+ Joke.
          </span>
        </p>
        <p className="font-bold text-white text-3xl my-5">
          I'm Really Sorry. I did this to gain some Knowledge in React.
        </p>
      </div>
    </div>
  );
}

export default App;
