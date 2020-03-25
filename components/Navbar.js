import Link from 'next/link';

const Navbar = () => (
  <header>
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" href="/meal-planner">
        <img className="logo" src="SMP-logo.png" />
      </Link>
      <Link className="nav-item" href="/shopping-list">
        <img className="List" src="/list.svg" />
      </Link>
      <Link className="nav-item" href="/settings">
        <img className="settings" src="/settings.svg" />
      </Link>
    </nav>
    <style jsx>{`
      .container {
        display: row;
      }
      .logo {
        width: 80px;
        margin-top: 10px;
        display: block;
      }
      .List {
        width: 30px;
        display: block;
        margin-left: auto;
        margin-right: 5px;
      }
      .settings {
        width: 25px;
        display: block;
      }
    `}</style>
  </header>
);

export default Navbar;
