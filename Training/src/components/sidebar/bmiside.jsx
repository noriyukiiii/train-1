
import Sidebarnav from './sidebar';
import Addtable from './addtable';

const Bmiside = () => {
  return (
    <div className='superside'>
        <div className="leftcol"> {/* Sidebarnav อยู่กลางแนวตั้ง */}
            <Sidebarnav/>
        </div>
        <div className="rightcol"> {/* Bmitable อยู่ด้านขวา */}
            <Addtable/>
        </div>
    </div>
  )
}

export default Bmiside;
