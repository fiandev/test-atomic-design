import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardHeadery ({ children, icon }) {
  return (
      <div className="w-full px-2 flex justify-center items-center gap-2 text-gray-300 font-bold capitalize">
        <FontAwesomeIcon className="text-md text-main bg-clip-text text-transparent bg-gradient-to-t from-main to-blue-400" icon={ icon } />
        <span>{ children }</span>
      </div>
    )
}