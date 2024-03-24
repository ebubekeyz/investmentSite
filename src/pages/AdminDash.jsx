import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/AdminDash';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminDash = () => {
  const [user, setUser] = useState([]);

  const userFunc = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });

      setUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userFunc();
  }, [userFunc]);

  let idd = 0;

  return (
    <Wrapper>
      <Navbar2 />

      <div className="container">
        <Sidebar2 />
        <section className="admin">
          <div className="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>

                  <th>Country</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {user
                  ? user.map((item) => {
                      item.idd = idd++;
                      const {
                        _id: id,
                        fullName,
                        username,
                        email,
                        phone,
                        city,
                        country,
                        status,
                        referralId,
                      } = item;
                      const update = `/editUser?id=${id}`;
                      const del = `/deleteUser?id=${id}`;

                      return (
                        <tr>
                          <td>{idd}</td>
                          <td>{fullName}</td>
                          <td>{username}</td>
                          <td>{email}</td>

                          <td>{country}</td>
                          <td>{city}</td>
                          <td>{phone}</td>
                          <td>
                            <Link to={update} type="button" className="btn">
                              update
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={del}
                              type="button"
                              style={{ background: 'red' }}
                              className="btn"
                            >
                              delete
                            </Link>
                          </td>
                          {/* <td
                            style={{
                              color: status === 'verified' ? 'green' : 'red',
                            }}
                          >
                            {status}
                          </td> */}
                        </tr>
                      );
                    })
                  : '<p>No User</p>'}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <FooterMobile />
    </Wrapper>
  );
};
export default AdminDash;
