import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import login from "@/pages/login"; // Импорт страницы входа

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Label htmlFor="create_account">Создать аккаунт</Label>
                            <Label htmlFor="email">Почта</Label>
                            <Input />
                            <Label htmlFor="password">Пароль</Label>
                            <Input />
                            <Label htmlFor="repeat_password">Повторите пароль</Label>
                            <Input />
                            <Button>Создать аккаунт</Button>
                            <Label>Уже есть аккаунт?</Label>
                            {/* Ссылка для перехода на страницу входа */}
                            <Link to="/login" style={{ color: "#6366F1" }}>Войти</Link>
                        </div>
                    }
                />
                <Route path="/login" element={<login />} />
            </Routes>
        </Router>
    );
}

export default App;