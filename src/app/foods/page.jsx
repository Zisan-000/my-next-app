import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  console.log(foods);
  return (
    <div>
      <h1 className="text-4xl text-cyan-500 my-10">Foods: {foods.length}</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {foods.map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
