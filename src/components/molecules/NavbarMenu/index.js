import ListMenu from "../../atoms/ListMenu";

export default function NavbarMenu () {
  return (
      <ul className="flex flex-col lg:flex-row">
        <ListMenu text="Find an Experts" link="find-an-expert" />
      </ul>
    )
}