import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const {
    id,
    dish_name,
    image_link,
    main_ingredients,
    approximate_nutrition_per_serving,
  } = data.data;
  //   console.log(approximate_nutrition_per_serving);
  const { nutrition, calories } = approximate_nutrition_per_serving;

  return (
    <div className="my-20">
      <h1 className="my-10">Showing Details of food: {foodId}</h1>
      <h3 className="text-3xl">
        Dish: <span className="text-orange-400 font-bold">{dish_name}</span>
      </h3>
      <Image
        className="my-10"
        src={image_link}
        alt={dish_name}
        width={400}
        height={400}
      ></Image>
      <div>
        <h2 className="text-center text-2xl text-pink-500 my-5">Ingredients</h2>
        <ul className="list-disc pl-10">
          {main_ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-center text-2xl text-emerald-500 my-5">
          Nutritions
        </h2>
        <ol className="list-decimal pl-10">
          {Object.entries(approximate_nutrition_per_serving).map(
            ([key, value]) => (
              <li key={key}>
                {key} : {value}
              </li>
            ),
          )}
        </ol>
      </div>
    </div>
  );
};

export default FoodDetailPage;
