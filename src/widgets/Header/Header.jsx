import './Header.css'
import Logo from "../../assets/logo.svg?react"

export const Header = () => {

    return (
        <nav className="navigator">
            <Logo/>
            <div>
                <p>REMAINING</p>
                <p>2400</p>
            </div>
        </nav>
    )
}