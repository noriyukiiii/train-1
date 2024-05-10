import Home from '../Menu/home';
import Sidebarnav from './sidebar';

const Homeside = () => {
  return (
    <div className="superside">
      <div className='leftcol'>
        <Sidebarnav />
      </div>
      <div className="rightcol">
        <Home/>
      </div>
    </div>
  );
};
  
export default Homeside;
