function Post() {
    return (
            <header className="post-header">
                <div className="post-header-left">
                    <img
                        src="/src/assets/logo.svg"
                        alt="Левая картинка"
                        className="left-image"
                    />
                </div>
                <div className="post-header-right">
                    <p>Добро пожаловать!</p>
                    <img
                        src="/src/assets/avatar.svg"
                        alt="Правая картинка"
                        className="right-image"
                    />
                </div>
                <div className="post-picture">
                    <img
                        src="/src/assets/adv.png"
                        alt="Правая картинка"
                        className="picture"
                    />
                </div>
            </header>

    );
}

export default Post;
