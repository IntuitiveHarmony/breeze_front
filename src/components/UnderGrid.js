import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const UnderGrid = (props) => {
  const [active, setActive] = useState(false)

  const handleActivateStep = () => {
    setActive(!active)
  }



  return (
    <>
      <div className='underStep'>
      </div>
    </>
  )
}
export default UnderGrid;
