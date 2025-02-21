import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/winder' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-[#0f1214] text-white px-4 py-1 rounded-lg w-fit hover:bg-blue-500'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;