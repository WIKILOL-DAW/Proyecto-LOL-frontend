import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export function ComprobarToken() {

    const [token] = useState(JSON.parse(sessionStorage.getItem("token")));
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    })
}