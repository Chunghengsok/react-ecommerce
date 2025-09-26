import { Link } from "react-router-dom";
function Card({ title, price, image, id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="border border-gray-400 ">
        <figure className="p-2 h-[160px] lg:h-[260px] overflow-hidden ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all hover:scale-110"
          />
        </figure>
        <div className="px-2 py-2">
          <h3 className="line-clamp-1">{title}</h3>
          <p className="text-red-500">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
