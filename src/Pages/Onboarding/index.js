import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="text">
          <h1>Your Equisite solution to cleaning</h1>
          <p>
            Welcome to our Professional Cleaning Service! At Neat and Tidy
            Service [NTS], we prioritize professionalism and trustworthiness to
            deliver exceptional cleaning services. We understand the challenges
            of finding reliable cleaners, which is why we're dedicated to
            setting a new standard in the industry. Our expert cleaners are
            highly trained, experienced, and pride themselves on punctuality,
            courtesy, and respect for your space.
          </p>

          <div className="btn">
            <Link to="/login">
            <button>Login</button>
            </Link>

            <Link to="/signup">
            <button>SignUp</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Onboarding;
