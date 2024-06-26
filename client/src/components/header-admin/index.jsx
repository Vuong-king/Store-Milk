import { Link } from "react-router-dom";
import { SearchOutlined, UserOutlined} from '@ant-design/icons';
import "./index.scss";
function Header() {



    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src="logo.png"
                        alt=""
                        width={200}
                    />
                </Link>
            </div>
            <nav className="header__nav">
                <ul>
                    <div className="sbv">
                        <li>
                            <Link to="/">Sản phẩm</Link>
                        </li>
                        <li>
                            <Link to="/">Bài đăng</Link>
                        </li>
                        <li>
                            <Link to="/milk-management">Quản lý sữa</Link>
                        </li>
                    </div>
                    <div className="header__icon">
                        <li>
                            <SearchOutlined />
                        </li>
                        <li>
                            <UserOutlined />
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )


}

export default Header;