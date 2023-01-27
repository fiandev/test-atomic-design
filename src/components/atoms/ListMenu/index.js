import { Link } from "react-router-dom";

export default function ListMenu ({ text, link }) {
  return (
      <li>
        <Link to={link}>
          {text}
        </Link>
      </li>
    )
}