import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import RecipeList from "./pages/recipeList";
import RecipeListSweet from "./pages/recipeListSweet";
import RecipeDetail from "./pages/recipeDetail";
import RecipeDetailSweet from "./pages/recipeDetailSweet";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          <Link to="/">🏠 Home</Link>
          <Link to="/recipes">📖 ของคาว</Link>
          <Link to="/recipesSweet">📖 ของหวาน</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipesSweet" element={<RecipeListSweet />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/recipesSweet/:id" element={<RecipeDetailSweet />} />
        </Routes>
      </div>
    </Router>
  );
}
