import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

export default function RecipeList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">📖 รายการสูตรอาหาร</h2>
      <ul className="space-y-2">
        {recipes.map((r) => (
          <li key={r.id}>
            <Link
              className="text-blue-600 underline"
              to={`/recipes/${r.id}`}
            >
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
