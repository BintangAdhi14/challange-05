import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleLogin from '../components/GoogleLogin';
import CarouselSlider from '../components/CarouselSlider';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/actions/authActions';

function Login() {
  const dispatch = useDispatch ()
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const { loading, error } = useSelector((state)=> state.auth);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      dispatch(login(data, navigate));

      // let config = {
      //   method: 'post',
      //   url: `${import.meta.env.VITE_API}/v1/auth/login`,
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   data: data,
      // };

      // const response = await axios.request(config);
      // const { token } = response.data.data;

      // localStorage.setItem('token', token);

      // navigate('/');

      // // Temporary solution
      // window.location.href = '/';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  

  const handleCloseRegister = () => {
    const login = document.querySelector('.wrapper-login');
    login.classList.remove('active');
  };

  const handleShowPassword = () => {
    setIsClicked(!isClicked);
    var passwordField = document.getElementById('passwordField');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  };


  return (
    <>
      <>
        <CarouselSlider />
      </>
      <div className="wrapper-login">
        <Container className="d-flex justify-content-center align-item-center">
          <Row className="baris-register">
            <Col>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <div className="tag-group">
                    <h1 className="tag-register">Log In to Your Account</h1>
                    <label onClick={handleCloseRegister} className="cross2">
                      <i className="fa-solid fa-forward"></i>
                    </label>
                  </div>
                  <div className="line">
                    <div className="form-input">
                      <input type="email" placeholder="Email Address" className="isi-form" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                  </div>
                  <div className="line">
                    <div className="form-input">
                      <input type="password" id="passwordField" placeholder="Password" className="isi-form" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-icon" onClick={handleShowPassword}>
                      {isClicked ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                    </div>
                  </div>
                  <button type="submit" className="tombol-submit">
                    Login
                  </button>
                  <GoogleLogin buttonText="Login with Google" />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
