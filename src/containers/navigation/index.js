import logo from "../../media/logo.svg"

function Navigation() {
    let styles = {
        backgroundColor: "#FC3D20",
        hight: "60px"
    }
    return (
        <nav style={styles}>
            <img src={logo} height="60px" alt="SISIR Radar Logo"></img>
        </nav>
    )
}

export default Navigation