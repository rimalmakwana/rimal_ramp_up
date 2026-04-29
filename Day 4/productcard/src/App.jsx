import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <ProductCard
          name="iPhone 15"
          price={79999}
          imageUrl="https://via.placeholder.com/200"
          inStock={true}
          rating={4.5}
        />

        <ProductCard
          name="Samsung S23"
          price={69999}
          imageUrl="https://via.placeholder.com/200"
          inStock={false}
          rating={4.2}
        />

        <ProductCard
          name="OnePlus 11"
          price={59999}
          imageUrl="https://via.placeholder.com/200"
          inStock={true}
          rating={4.3}
        />
      </div>
    </>
  );
}

export default App;
