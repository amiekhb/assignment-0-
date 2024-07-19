const Header = () => {
  return (
    <header className=" mx-80 flex">
      <div className="flex ">
        <div className="flex gap-6">
          <h1 className="font-bold">Brainwave.io</h1>
          <ul className="flex gap-5">
            <li>Demos</li>
            <li>Pages</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="bg-indigo-600 text-white rounded justify-end">
          Get started a project
        </button>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
