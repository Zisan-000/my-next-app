import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const { id, dish_name, image_link } = data.data;

  return (
    <div>
      <h1>Showing Details of food: {foodId}</h1>
      <h3 className="text-3xl">Dish: {dish_name}</h3>
      <Image src={image_link} alt={dish_name} width={400} height={400}></Image>
    </div>
  );
};

export default FoodDetailPage;
