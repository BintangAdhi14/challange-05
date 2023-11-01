import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from '../../components/CarouselSlider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, searchMovies } from '../../redux/actions/movieActions';
import { fetchUser } from '../../redux/actions/userActions';




function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector ((state) => state.user.user);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const [buttonText, setButtonText] = useState('More Movie');
  const [showAllMovies, setShowAllMovies] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  // Modify the fatchMovie function to dispatch a searchMovies action
  async function fatchMovie() {
    if (search !== '') {
      dispatch(searchMovies(search));
    }
  }  
  
  const PopularMovieList = () => {
    const limited = showAllMovies ? popularMovies : popularMovies.slice(0, 4);
    return limited.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <Link to={`/MovieDetail/${movie.id}`}>
            <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </Link>
        </div>
      );
    });
  };

  const handleClickClose = () => {
    const dash = document.querySelector('.wrapper-dash');
    dash.classList.toggle('active');
  };

  const changeText = () => {
    setShowAllMovies(!showAllMovies);
    const newText = buttonText === 'More Movie' ? 'Less Movie' : 'More Movie';
    setButtonText(newText);
  };

  return (
    <>
      <div className="wrapper-dash">
        <Container className="d-flex justify-content-center align-item-center">
          <Row className="baris-register">
            <Col>
              <form>
                <div className="form-group2">
                  <Col className="text-center">
                    <label className="cross3" onClick={handleClickClose}>
                      <i className="fa-solid fa-circle-xmark"></i>
                    </label>
                  </Col>
                  <div className="tag-group">
                    <h1 className="text-center">
                      Hi, {user?.name} with {user?.email}! <br />
                      This page only can be accessed by user having login
                    </h1>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <>
        <Carousel />
      </>
      <Row className="w-100">
        <Col className="col-9">
          <h2 className="tag-popular">Popular Movies</h2>
        </Col>
        <Col className="p-0">
          <h5 id="myButton" className="tag-popular2" onClick={changeText}>
            {buttonText} <i className="fa-solid fa-arrow-right"></i>
          </h5>
        </Col>
        <div className="search_wrap search_wrap_3">
          <div className="search_box">
            <input type="text" placeholder="What do you want to watch?" className="input" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="btn btn_common" onClick={fatchMovie}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </Row>

      <div className="Movie-container">
        <PopularMovieList />
      </div>
      <footer className="footer">MovieList &copy;2023.</footer>
    </>
  );
}

export default Dashboard;
