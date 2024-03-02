import { Button } from "@material-tailwind/react";
import { ParticlesLayer } from "../components/ParticlesLayer";
import UserBadge from "../components/UserBadge";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh]">
      <nav className="navbar">
        <div className="logo">ReduxQuery</div>
        <ul className="nav-ul">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="userbadge">
          {Cookies.get("user") ? (
            <UserBadge name="Jai Shree Ram" profileURL="google.com" />
          ) : (
            <Button
              variant="filled"
              className="text-sm"
              color="green"
              placeholder="Sign Up"
              onClick={()=>{navigate("/signup")}}
            >
              Sign Up
            </Button>
          )}
        </div>
      </nav>
      <div className="body z-[-10] overflow-hidden">
        <ParticlesLayer />
      </div>
    </div>
  );
};

export default HomePage;
