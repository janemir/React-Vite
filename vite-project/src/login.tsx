import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <Label htmlFor="email">Почта</Label>
            <Input id="email" placeholder="Введите почту" />
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" placeholder="Введите пароль" />
            <Button onClick={() => navigate("/post")}>Войти</Button>
        </div>
    );
}

export default Login;
