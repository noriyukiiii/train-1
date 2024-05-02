
import Sidebarnav from './sidebar';
import Bmitable from '../bmi';

const Bmiside = () => {
  return (
    <div className='superside'>
        <div className="leftcol"> {/* Sidebarnav อยู่กลางแนวตั้ง */}
            <Sidebarnav/>
        </div>
        <div className="rightcol"> {/* Bmitable อยู่ด้านขวา */}
            <Bmitable/>
        </div>
    </div>
  )
}

export default Bmiside;
