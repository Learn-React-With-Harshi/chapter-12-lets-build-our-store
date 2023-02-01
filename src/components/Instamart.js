import instamart from '../../assets/images/instamart.png';

const Instamart = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-10 p-5">
        <span className='text-blue-dark font-bold text-4xl'>Coming Soon ...</span>
        <img className="w-[300px]" alt="instamert" src= {instamart} />
      </div>
    </div>
  )
}

export default Instamart;