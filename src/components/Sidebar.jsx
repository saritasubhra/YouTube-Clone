import { categories } from "../utils/constants";
/* eslint-disable react/prop-types */
function Sidebar({ selected, setSelected }) {
  return (
    <aside className="p-8 border-r-2 h-[92vh] sticky bg-white">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => setSelected(category.name)}
          className={`navlist ${
            selected === category.name ? "navlist-selected" : ""
          } `}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
