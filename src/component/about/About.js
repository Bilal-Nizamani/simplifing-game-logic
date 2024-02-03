import React from "react";

const AboutGamePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-900 text-white min-h-screen p-8 relative">
      <div className=" mx-auto mt-8 flex flex-col gap-y-8 ">
        <h2 className="text-4xl font-semibold mb-4">
          About the Multiplayer Typing Race Game
        </h2>
        <p className="text-left  mb-4">
          Welcome to the adrenaline-pumping world of the Multiplayer Typing Race
          Game! Get ready to put your typing skills to the test in a thrilling
          and competitive environment.
        </p>

        <div className="text-left flex flex-col gap-y-6  mb-4">
          <p className="mb-2">
            🌟 <strong>Three Exciting Game Modes:</strong> Experience the rush
            of auto-room matching, challenge yourself in single-player mode, or
            create custom rooms for a personalized gaming experience.
          </p>
          <p className="mb-2">
            🚗 <strong>In-Game Purchases:</strong> Stand out on the racetrack
            with unique and customizable cars that you can purchase using real
            money. Express your style and dominance!
          </p>
          <p className="mb-2">
            🎮 <strong>Comprehensive Room Management:</strong> As a registered
            user, enjoy the privilege of creating, deleting, joining, and
            leaving rooms. Hosts have the power to manage players, ensuring a
            smooth gaming experience.
          </p>
          <p className="mb-2">
            💬 <strong>Real-Time Communication:</strong> Engage with fellow
            racers through real-time messaging within the same room. Build
            camaraderie, strategize, or celebrate your victories together!
          </p>
          <p className="mb-2">
            🚀 <strong>Auto-Player Matching:</strong> Dive straight into the
            action with our auto-player matching feature. No need for explicit
            room creation or joining—just start racing and enjoy the thrill!
          </p>
          <p className="mb-2">
            📊 <strong>Detailed Match Results:</strong> Track your performance
            with detailed end results, showcasing metrics like average words per
            minute (WPM), accuracy, wrong word count, position, finishing time,
            and dynamic charts tracking WPM throughout the game.
          </p>
          <p className="mb-2">
            ⚙️ <strong>Cutting-Edge Technologies:</strong> Our game is crafted
            with the latest technologies, including Next.js, Tailwind CSS,
            Node.js, Socket.io, and Chart.js, ensuring a seamless and immersive
            multiplayer gaming experience.
          </p>
        </div>

        <p className="text-left ">
          Join us on the racetrack, sharpen your typing skills, and let the
          competition begin! Whether you{"'"}re a seasoned typer or just getting
          started, there{"'"}s a race waiting for you. Ready, set, type!
        </p>
      </div>
    </div>
  );
};

export default AboutGamePage;
