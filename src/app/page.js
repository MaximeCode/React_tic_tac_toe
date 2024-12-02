"use client";

import Board from "./board"
import { useEffect } from 'react';

export default function Page() {

  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/sw.js')
  //       .then((registration) => console.log('scope is: ', registration.scope));
  //   }
  // }, []);

  return (
    <div className="container w-1/2 mx-auto border border-blue-700 p-3">
      <h1 className="italic">Hello, Next.js!</h1>
      <Board />
    </div>
  );
}