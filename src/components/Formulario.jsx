import { useState, useEffect } from "react"

export function Formulario() {
    const [usuarios, setUsuarios] = useState([])
    const [usuario, setUsuario] = useState("")

    const obtenerUsuarios = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsuarios(data))
    }

    useEffect(() => { obtenerUsuarios() }, [])

    const getUser = (e) => {
        setUsuario(e.target.value)
    }

    let filtradoUser = []

    if (usuario) {
        filtradoUser = usuarios.filter(user => {
            return user.name.toLowerCase().includes(usuario.toLowerCase())
        })
    } else {
        filtradoUser = usuarios
    }

    return (
        <>
            <form>
                <input
                    value={usuario}
                    type="text"
                    placeholder="Nombre"
                    onChange={getUser}
                />
            </form>
            <section>
                <h2>Personajes</h2>
                {
                    filtradoUser && filtradoUser.map(user => {
                        return (
                            <div key={user.id}>
                                <p >{user.name}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}