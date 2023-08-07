import "./styles.css";
import { people } from "./data";
import { getImageUrl } from "./utils";
export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {"" + person.profession + ""}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
