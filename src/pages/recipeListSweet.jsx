import { Link } from "react-router-dom";
import { recipesSweet } from "../data/recipesSweet";

export default function RecipeListSweet() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">📖 รายการสูตรของหวาน</h2>
      <ul className="space-y-2">
        {recipesSweet.map((r) => (
          <li key={r.id}>
            <Link
              className="text-blue-600 underline"
              to={`/recipesSweet/${r.id}`}
            >
              {r.name} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
