import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function WIP() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Working on it!</h1>
      <iframe
        src="https://giphy.com/embed/l2Je8e1UVcWyBURGM"
        width="300"
        height="300"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p
        style={{
          width: "40%",
          minWidth: "300px",
        }}
      >
        {
          "I've already started to dockerize the server for hosting to the cloud. The next step would be to implement Redis as a database tool, rather than the JSON object I just have stored on the server. That said, it's on the back-burner for now. If you're <i>that</i> interested in the game, I encourage you to pull the codebase and follow the steps in Readme to get it live on your localhost!"
        }
      </p>
      <Link href="/">
        <button>Go home</button>
      </Link>
      <Footer />
    </main>
  );
}
