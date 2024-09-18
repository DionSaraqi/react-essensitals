export default function TabButton(props) {
  return (
    <li>
      <button className={props.isActive ? "active" : undefined} {...props}>
        {props.children}
      </button>
    </li>
  );
}
