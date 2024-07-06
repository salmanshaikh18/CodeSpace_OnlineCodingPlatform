import { useNavigate } from "react-router-dom";
import "../styles/spaceBtn.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import PleaseLogin from "@/components/PleaseLogin";

const CodePlaygroundHome = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );

  return (
    <>
      {isLoggedIn ? (
        <div className="h-[calc(100vh-90px)] w-full text-zinc-200 font-medium">
          <div className="flex flex-col justify-center items-center my-4">
            <h1 className="text-yellow-600 font-bold text-xl sm:text-4xl">
              Welcome to Code Playground
            </h1>
            <p className="text-yellow-700 text-sm sm:text-xl">
              Practice coding across multiple languages
            </p>
          </div>
          <div className="flex flex-col md:flex-row px-4 md:px-10 my-10">
            <div className="w-full md:w-1/2 my-10 md:my-0">
              <h1 className="text-blue-500 font-bold text-xl">Features</h1>
              <li>
                Write and execute code in JavaScript, TypeScript, Python, Java,
                PHP, and CSharp.
              </li>
              <li>Explore core language concepts and coding constructs.</li>
              <li>No need for imports or external dependencies.</li>
              <li>Focus on learning and experimenting with code.</li>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-blue-500 font-bold text-xl">Limitations</h1>
              While Code Playground offers a rich environment for experimenting
              with code, it has some limitations:
              <li>Does not support user input or external imports.</li>
              <li>
                Designed for practicing core language concepts rather than
                building complete applications.
              </li>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row px-4 md:px-10 my-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-blue-500 font-bold text-xl">Use Cases</h1>
              <p>Code Playground can be incredibly useful for:</p>
              <li>Learning programming fundamentals.</li>
              <li>Comparing syntax differences between languages.</li>
              <li>Prototyping algorithms and logic.</li>
              <li>Experimenting with new coding techniques.</li>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center flex-col my-10 md:my-0">
              <p>Ready to explore Code Playground?</p>
              <button
                onClick={() => navigate("/code-playground/editor")}
                className="btn mt-2"
                type="button"
              >
                <strong>Code PlayGround</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <PleaseLogin feature={"CodePlayground"} />
      )}
    </>
  );
};

export default CodePlaygroundHome;
