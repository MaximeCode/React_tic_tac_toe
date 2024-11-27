import Board from "./board"

export default function Page() {
  return (
    <div className="container w-1/2 mx-auto border border-blue-700 p-3">
      <h1 className="italic">Hello, Next.js!</h1>
      <Board />
    </div>
  );
}