// import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "../styles/gradientText.css";
import Footer from "@/components/Footer";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className="w-full bg-[#0E1630]">
      <div
        id="landing-page"
        className="bg-[#003140] sm:h-[calc(100vh-60px)] py-8 flex sm:flex-row flex-col w-full"
      >
        <div
          id="left"
          className="sm:w-[45%] w-full h-full flex justify-center items-center"
        >
          <img
            className="rounded-lg w-[80%] mt-4"
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt=""
          />
        </div>
        <div
          id="right"
          className="sm:w-[55%] w-full h-full flex flex-col px-1 justify-center items-center gap-1"
        >
          <h1 className="sp text-[45px] sm:text-[6.2vw] rounded-lg px-2 sm:px-0 font-bold sm:font-semibold">
            The CodeSpace
          </h1>
          <div className="sp sm:text-[3.5vw] text-3xl h-10 sm:h-20 my-4 sm:my-4 sm:mt-10">
            <Typewriter
              words={["Hello", "Welcome to my site", "Enjoy your stay!"]}
              loop={0} // number of times to loop through the words it its set to 0 then it will be infinite
              cursor={false}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <h2 className="text-[#976CE5] sm:text-2xl text-lg font-semibold">
            A One Stop Solution For Developers
          </h2>
          <p className="text-center p-6 text-[16px] sm:text-lg">
            The CodeSpace is a social development environment for front-end
            designers and developers. Build and deploy a website, show off your
            work, build test cases to learn and debug, and find inspiration.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pb-20 pt-10 md:pt-0 md:pb-0 border-b-2 border-zinc-700">
        <div className="md:w-1/2 p-6 md:p-20 gap-6 flex flex-col">
          <h1 className="text-4xl border-t-2 pt-2 font-bold pb-2 text-center  transition all ease duration-150 border-b-2 text-[#03CF7E] border-zinc-600  cursor-pointer">
            Code Editor for HTML, CSS, and JS:
          </h1>
          <h2 className="sm:text-xl text-md text-zinc-300 text-center">
            Dive into the world of web development with our intuitive code
            editor. Write, debug, and run your HTML, CSS, and JavaScript code
            seamlessly, all in one place. Experience the joy of coding with a
            responsive and user-friendly interface.
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            className="md:h-[240px] md:w-[340px] w-[280px] h-[200px] transition-all ease-in-out duration-700 hover:shadow-[0_0_15px_gray] shadow-[0_0_15px_white] bg-center object-center rounded-lg"
            // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZlOWw2aGpncnpuZHNseHd4cm93dHBleGI3cWdtd2xzd3ZsYTlsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cB4TGncE6f6QZR1cxu/giphy.gif"
            src="https://media.giphy.com/media/3NE7JhJgZBHlMfmNEa/giphy.gif"
            // src={codeEditorImg}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pb-20 pt-20 md:pt-0 md:pb-0 border-b-2 border-zinc-700">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            className="md:h-[240px] md:w-[340px] w-[280px] h-[200px] transition-all ease-in-out duration-700 hover:shadow-[0_0_15px_gray] shadow-[0_0_15px_white] bg-center object-center rounded-lg"
            // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZlOWw2aGpncnpuZHNseHd4cm93dHBleGI3cWdtd2xzd3ZsYTlsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cB4TGncE6f6QZR1cxu/giphy.gif"
            src="https://media.tenor.com/whgQwNlVvNkAAAAi/xero-code.gif"
            // src={codeEditorImg}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-20 gap-6 flex flex-col">
          <h1 className="text-4xl border-t-2 pt-2 font-bold pb-2 text-center  transition all ease duration-150 border-b-2 text-[#03CF7E] border-zinc-600  cursor-pointer">
            Code Playground:
          </h1>
          <h2 className="sm:text-xl text-md text-zinc-300 text-center">
            Code Playground is a a space for users to practice coding constructs
            and logic in different languages without worrying about complex
            setups or dependencies. Designed for practicing core language
            concepts rather than building complete applications.
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pb-20 pt-10 md:pt-0 md:pb-0 border-b-2 border-zinc-700">
        <div className="md:w-1/2 p-6 md:p-20 gap-6 flex flex-col">
          <h1 className="text-4xl border-t-2 pt-2 font-bold pb-2 text-center  transition all ease duration-150 border-b-2 text-[#03CF7E] border-zinc-600  cursor-pointer">
            AI-Powered Assistant:
          </h1>
          <h2 className="sm:text-xl text-md text-zinc-300 text-center">
          Welcome to the future of productivity! Meet our AI-powered assistant, revolutionizing how you interact with your project. From answering queries to automating tasks, our assistant streamlines your workflow effortlessly. Experience the convenience of intelligent assistance right at your fingertips.
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            className="md:h-[240px] md:w-[340px] w-[280px] h-[200px] transition-all ease-in-out duration-700 hover:shadow-[0_0_15px_gray] shadow-[0_0_15px_white] bg-center object-center rounded-lg"
            // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZlOWw2aGpncnpuZHNseHd4cm93dHBleGI3cWdtd2xzd3ZsYTlsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cB4TGncE6f6QZR1cxu/giphy.gif"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZlOWw2aGpncnpuZHNseHd4cm93dHBleGI3cWdtd2xzd3ZsYTlsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cB4TGncE6f6QZR1cxu/giphy.gif"
            // src={codeEditorImg}
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
