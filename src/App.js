import "./App.css";
import Home from "./Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://free-materials.com/adm/wp-content/uploads/2019/02/adpDSC_2734-750x500.jpg")`,
        backgroundSize: "cover", // 背景画像をカバーするように設定
        backgroundPosition: "center", // 背景画像を中央に配置
        height: "100vh", // ビューポートの高さいっぱいに広がるように設定
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white", // テキストの色を白に設定
      }}
    >
      <h1>ラーメン店FastPass</h1>
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
