
import Sidebarnav from '../sidebar';
import Addtable from './addtable';

const Bmiside = () => {
  return (
    <div className='flex justify-between'>
        <div className="w-auto"> {/* Sidebarnav อยู่กลางแนวตั้ง */}
            <Sidebarnav/>
        </div>
        <div className="w-full"> {/* Bmitable อยู่ด้านขวา */}
            <Addtable/>

        </div>
    </div>
  )
}

export default Bmiside;
