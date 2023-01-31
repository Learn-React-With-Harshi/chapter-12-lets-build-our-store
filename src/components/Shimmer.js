import { SHIMMER_RES_CARDS_COUNT } from '../config';
import { SHIMMER_MENU_ITEMS_COUNT } from '../config';

const CardShimmer = () => {
  return (
    <div className="shimmer-card basis-[250px] p-2.5 mb-2.5 shadow animate-pulse">
      <div className="shimmer-img stroke animate h-[144px] w-[230px] bg-bio"></div>
      <div className="shimmer-title stroke animate w-3/5 mt-2.5 h-[15px]  bg-bio "></div>
      <div className="shimmer-tags stroke animate w-4/5 mt-1 h-[15px]  bg-bio"></div>
      <div className="shimmer-details stroke animate w-full mt-[18px] h-[15px]  bg-bio"></div>
    </div>
  );
}

export const MenuShimmer = () => {
  return (
    <div className="mt-24 min-h-screen animate-pulse">
      <div className="flex basis-full h-60 justify-evenly items-center p-8 bg-gray ">
        <img className="shimmer-img stroke animate h-[144px] w-[230px] bg-bio " />
        <div className="restaurant-summary-details flex flex-col basis-[540px] m-5">
          <h2 className="shimmer-w40  stroke animate w-2/5 mt-2.5 h-[15px] bg-bio"></h2>
          <p className="shimmer-w20 stroke animate w-1/5 mt-1 h-[15px] bg-bio"></p>
          <div className="shimmer-w60  stroke animate w-3/5 mt-2.5 h-[15px] bg-bio ">
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content flex justify-center">
        <div className="menu-items-container mt-7 w-[848px]">
          <div className="menu-title-wrap  p-5 ">
            <h3 className="shimmer-w40 stroke animate w-2/5 mt-2.5 h-[15px] bg-bio"></h3>
            <p className="shimmer-w20 stroke animate w-1/5 mt-1 h-[15px] bg-bio"></p>
          </div>
          <div className="menu-items-list  flex flex-col justify-evenly">
            { Array.from({length:SHIMMER_MENU_ITEMS_COUNT}).map( (element, index)  => 
            <div className="shimmer-menu-card flex justify-evenly w-[848px] p-2.5 mb-2.5 shadow animate-pulse" key={index}>
              <div className="shimmer-item-details w-[438px]">
                <h3 className="shimmer-w40  stroke animate w-2/5 mt-2.5 h-[15px]  bg-bio"></h3>
                <p className="shimmer-w20  stroke animate w-1/5 mt-1 h-[15px]  bg-bio"> </p>
                <p className="shimmer-w60  stroke animate w-3/5 mt-2.5 h-[15px]  bg-bio"></p>
              </div>
              <div className="shimmer-img-wrapper flex flex-col justify-center items-center w-[118px] h-[150px]">
                <img className="shimmer-img stroke animate w-[118px] h-[96px]  bg-bio" /> 
                <div className="shimmer-btn stroke animate w-[94px] h-[34px] mt-2.5 bg-bio"> </div>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="cart-widget"></div>

      </div>
    </div>
  )
}

const Shimmer = () => { 
  return (
    <div className="shimmer-container flex flex-wrap gap-5 justify-evenly">
      {Array.from({length:SHIMMER_RES_CARDS_COUNT}).map((element, index) => {
        return <CardShimmer key ={index} />
      }) }
    </div>   
  )
}

export default Shimmer;