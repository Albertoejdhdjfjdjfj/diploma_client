import HeaderSelect from '../HeaderSelect/HeaderSelect';
import logo from '../../images/logo.png';
import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className="header_bar">
      <a>
        Mafia
        <img alt="logo" src={logo} />
      </a>
      <HeaderSelect />
    </div>
  );
};

export default HeaderBar;
