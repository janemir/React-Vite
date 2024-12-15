import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Login from "@/login"; // Импорт страницы входа
import Post from "@/post"; // Импорт страницы постов
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import "./Home.css";


function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </Router>
    );
}

function Home() {
    const navigate = useNavigate();

    return (

            <div className="form-container">
                <Label htmlFor="create_account" className="label-create-account">Создать аккаунт</Label>
                <div className="form-input-group">
                    <Label htmlFor="email">Почта</Label>
                    <Input id="email" placeholder="Введите почту" />
                </div>
                <div className="form-input-group">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" placeholder="Введите пароль" />
                </div>
                <div className="form-input-group">
                    <Label htmlFor="repeat_password">Повторите пароль</Label>
                    <Input id="repeat_password" placeholder="Повторите пароль" />
                </div>
                <div className="select-role-group">
                    <Label htmlFor="select_role">Выберите роль</Label>
                    <div className="tabs-container">
                        <div className="tabs-container">
                            <Tabs defaultValue="account">
                                <TabsList className="tabs-list">
                                    <TabsTrigger className="tabs-trigger" value="reader">Читатель</TabsTrigger>
                                    <TabsTrigger className="tabs-trigger" value="author">Автор</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <Button onClick={() => navigate("/post")}>Создать аккаунт</Button>
                <Label>Уже есть аккаунт?</Label>
                <Link to="/login" style={{ color: "#6366F1" }}>Войти</Link>
            </div>

    );
}


export default App;
