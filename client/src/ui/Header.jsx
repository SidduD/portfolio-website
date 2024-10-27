import ResponsiveAppBar from "../components/ResponsiveAppBar";
function Header({ toggleTheme }) {
  return (
    <header>
      <ResponsiveAppBar toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
