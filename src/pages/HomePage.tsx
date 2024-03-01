import { ParticlesLayer } from "../components/ParticlesLayer"
import UserBadge from "../components/UserBadge"
const HomePage = () => {
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
              <UserBadge name="Jai Shree Ram" profileURL="google.com"/>
            </div>
        </nav>
        <div className="body z-[-1]">
          <ParticlesLayer/>
        </div>
    </div>
  )
}

export default HomePage