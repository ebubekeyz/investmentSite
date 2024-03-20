import Wrapper from '../assets/wrappers/Sidebar';
import { GoHome } from 'react-icons/go';
import { IoIosFlash } from 'react-icons/io';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { FaFileAlt } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GoBriefcase } from 'react-icons/go';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <aside id="dash">
          <article className="home">
            <GoHome className="icon" />
            <Link to="/dashboard" className="tog-text">
              Dashboard
            </Link>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <IoIosFlash className="icon" />
              </span>
              <span className="tog-text">Investment</span>
              <span>
                <MdKeyboardArrowDown className="ico" />
              </span>
            </div>
          </article>
        </aside>

        <div className="">
          <article id="dash2">
            <div className="tog">
              <span>
                <MdKeyboardDoubleArrowRight className="ico" />
              </span>
              <Link to="/investLog" className="tog-text2 tog-text">
                Invest Log
              </Link>
            </div>
          </article>

          <article id="dash2">
            <div className="tog">
              <span>
                <MdKeyboardDoubleArrowRight className="ico" />
              </span>
              <Link to="" className="tog-text2 tog-text">
                Invest Plan
              </Link>
            </div>
          </article>
        </div>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <IoFolderOpenOutline className="icon" />
              </span>
              <span className="tog-text">Withdraw</span>
              <span>
                <MdKeyboardArrowDown className="ico" />
              </span>
            </div>
          </article>
        </aside>

        <div className="">
          <article id="dash2">
            <div className="tog">
              <span>
                <MdKeyboardDoubleArrowRight className="ico" />
              </span>
              <span className="tog-text2 tog-text">Withdraw Log</span>
            </div>
          </article>

          <article id="dash2">
            <div className="tog">
              <span>
                <MdKeyboardDoubleArrowRight className="ico" />
              </span>
              <Link to="/withdraw" className="tog-text2 tog-text">
                Withdraw
              </Link>
            </div>
          </article>
        </div>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <GoBriefcase className="icon" />
              </span>
              <span className="tog-text">Deposit</span>
              <span>
                <MdKeyboardArrowDown className="ico" />
              </span>
            </div>
          </article>
        </aside>

        <div className="">
          <article id="dash2">
            <div className="tog">
              <span>
                <MdKeyboardDoubleArrowRight className="ico" />
              </span>
              <span className="tog-text2 tog-text">Deposit Log</span>
            </div>
          </article>

          <article id="dash2">
            <div className="tog">
              <span>
                <MdKeyboardDoubleArrowRight className="ico" />
              </span>
              <Link to="/deposit" className="tog-text2 tog-text">
                Deposit
              </Link>
            </div>
          </article>
        </div>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <RiMoneyDollarBoxLine className="icon" />
              </span>
              <span className="tog-text">Profit Log</span>
            </div>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <FaFileAlt className="icon" />
              </span>
              <span className="tog-text">Referral Log</span>
            </div>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <IoIosLogOut className="icon" />
              </span>
              <span className="tog-text">Logout</span>
            </div>
          </article>
        </aside>
      </div>
      ;
    </Wrapper>
  );
};
export default Sidebar;
