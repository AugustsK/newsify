import './loader.scss';

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen flex items-center justify-center h-screen">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    </div>
  );
}

export default Loader;
