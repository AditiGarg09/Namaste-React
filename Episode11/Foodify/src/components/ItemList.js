import { CDN_images } from "../utils/constants";

const ItemList = (data) => {
  return (
    <>
      {data.itemCardsData.map((items) => {
        return (
          <div className="border-b-2 border-gray-200 m-4 p-2 flex justify-between items-center" key={items.card.info.id}>
            <div className="w-9/12">
              <div
                className="flex font-bold text-gray-900 text-lg"
              >
                <span>{items.card.info.name}</span>
                <span className="mb-4">
                  - &#8377;
                  {items.card.info.price
                    ? items.card.info.price / 100
                    : items.card.info.defaultPrice / 100}
                </span>
              </div>
              <p>{items.card.info.description}</p>
            </div>
            <div className=" w-3/12 relative mb-4">
              <button className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-200 rounded-lg px-3 py-1 hover:bg-red-900 hover:text-white cursor-pointer shadow-md">
                Add +
              </button>
              <img
                src={CDN_images + items.card.info.imageId}
                className="w-full max-h-44"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
