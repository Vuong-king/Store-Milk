import "./index.scss";

function Login() {
    return (
        <div className="login">
            <div className="wrapper">
                <form className="login__form" action="">
                    <h1>Đăng nhập</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Your password" />

                    </div>

                    <div className="remeber-forgot">
                        <label>
                            <input type="checkbox" />Ghi nhớ mật khẩu
                        </label>
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                    <button className="done" type="submit">Đăng nhập</button>
                    <div className="register">
                        <p>Bạn chưa có tài khoản    <a href="#">Đăng ký</a> </p>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login