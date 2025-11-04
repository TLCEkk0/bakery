import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🍴 สูตรอาหาร Byผัวน้องแอน</h1>
      <p className="mb-4">เลือกดูสูตรอาหาร หรือจัดการสูตรใหม่</p>
      <Link
        to="/recipesSweet"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
      >
        ของหวาน
      </Link>
      &nbsp; &nbsp;
      <Link
        to="/recipes"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
      >
        ของคาว
      </Link>
    </div>
  );
}
