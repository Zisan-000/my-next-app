import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, dish_name, image_link, category, price } = food;

  return (
    <div>
      <div className="card bg-base-100 w-96 mx-auto shadow-sm">
        <figure>
          <Image
            className="my-4"
            src={image_link}
            alt={dish_name}
            width={200}
            height={200}
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {dish_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <Link href={``}>
              <button className=" btn btn-primary ">Add to Cart</button>
            </Link>
            <Link href={`/foods/${id}`}>
              <button className=" btn btn-secondary ">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
