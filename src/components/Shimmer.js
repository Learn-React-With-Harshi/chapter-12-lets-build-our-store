import { SHIMMER_RES_CARDS_COUNT } from '../config';

const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
}

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({length:SHIMMER_RES_CARDS_COUNT}).map((element, index) => {
        return <CardShimmer key ={index} />
      }) }
    </div>   
  )
}

export default Shimmer;