import Logged from '../Loginform/logged';
import Bmitable from './bmi';
import Sidebarnav from './sidebar';


const Bmical = () => {
  return (
    <div className='flex justify-between'> {/* เพิ่มคลาส flex เพื่อให้คอลัมน์ถูกจัดการโดย flexbox */}
        <div className="leftcol w-auto overflow-y-hidden overflow-x-hidden sticky top-0 h-screen"> {/* กำหนดความกว้างของ Sidebar เป็น 64px */}
            <Sidebarnav/>
        </div>
        <div className=" w-full"> {/* ให้คอลัมน์ด้านขวายืดออกตามขอบเขต */}
            <Logged/>
            <Bmitable/>
        </div>
    </div>
  )
}

export default Bmical;

