"use client";

import { useState } from "react";


function HomePage() {

  const [prompt, setPrompt] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="bg-zinc-950 h-screen flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt"
          className="p-2 rounded-md block bg-neutral-700 w-full"
        />
        <button className="bg-green-500  p-2 rounded-md block mt-2">
          Generate
        </button>
      </form>
    </div>
  );
}

export default HomePage;
