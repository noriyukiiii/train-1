import Logged from '../Loginform/logged';
import Sidebarnav from './sidebar';


const Loggedside = () => {
  return (
    <div className='superside'>
        <div className="leftcol"> {/* Sidebarnav อยู่กลางแนวตั้ง */}
            <Sidebarnav/>
        </div>
        <div className="rightcol"> {/* Bmitable อยู่ด้านขวา */}
            <Logged/>
        </div>
    </div>
  )
}

export default Loggedside;
