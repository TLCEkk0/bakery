import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import { useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  const [scale, setScale] = useState("100"); // เก็บเป็น string

  if (!recipe) {
    return (
      <div className="text-red-600 font-bold text-center mt-10">
        ❌ ไม่พบสูตร
      </div>
    );
  }

  const scaleNumber = Number(scale) || 0;

  const scaledIngredients = recipe.ingredients.map((ing) => ({
    ...ing,
    amount: (ing.amount * scaleNumber) / 100,
  }));

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-pink-100 p-6 text-center rounded-t-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">{recipe.name}</h2>
          <p className="text-gray-700 mt-2">หมวด: {recipe.category}</p>
        </div>

        {/* Scale Input */}
        <div className="bg-green-100 p-6 flex justify-center items-center space-x-3 shadow-md">
          <label className="font-semibold text-gray-700">ปรับสเกลสูตร (%):</label>
          <input
            type="number"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Ingredients */}
        <div className="bg-blue-100 p-6 rounded-b-xl shadow-md mt-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            ส่วนผสม
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scaledIngredients.map((ing, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-md flex justify-between"
              >
                <span className="font-semibold text-gray-700">{ing.name}</span>
                <span className="text-gray-600">
                  {(ing.amount || 0).toFixed(2)} {ing.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
