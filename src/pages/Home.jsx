import "./styles/home.css"

const Home = () => {
  return (
    <>
    <header>
    <div className="flex justify-center items-center h-80 flex-col">
  
      <h1 className="text-5xl font-bold p-4 z-10">Welcome to ToDoPro
      </h1>
      {/* <button className="border-2 rounded-md  p-3 font-bold">Get Started</button> */}
      <button>
       <span className="button_top"> Button
       </span>
      </button>
    </div>
    </header>
    <footer className="flex justify-center items-end">
      <span>Copyright @2024</span>
    </footer>
    </>
  );
};

export default Home;
