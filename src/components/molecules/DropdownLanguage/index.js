import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function DropdownLanguage() {
  return (
      <div className="flex fled-col relative">
        <div className="flex gap-2 items-center uppercase">
          <FontAwesomeIcon icon={ faGlobe } />
          <span>en</span>
          <FontAwesomeIcon icon={ faCaretDown } />
        </div>
        
      </div>
    )
}