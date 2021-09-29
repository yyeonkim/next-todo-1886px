import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={headerStyles.title}>Next로 만드는 Todo List</h1>
    </header>
  );
}
