'use client'
import { SubmitButton } from '@/app/submitButton'
import { handle } from '@/app/actions'
import { toast } from 'react-hot-toast';


export function Formulario() {
    async function wrapper(data) {
        const { type, message } = await handle(data);
        if (type == 'success') toast.success(message)
        if (type == 'error') toast.error(message)
    }

    return (
        <form action={wrapper}>
            <input type="text" required name="nombre" placeholder="Introduce tu nombre" />
            <input type="text" required name="apellidos" placeholder="Introduce tus apellidos" />
            <input type="password" name="password" placeholder="Introduce tu contraseña" />

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" />

            <label>Numero de hermanos:</label>

            <input type="radio" id="radio" name="radio" value="1" />
            <label for="option1">1</label>

            <input type="radio" id="radio" name="radio" value="2" />
            <label for="option2">2</label>

            <input type="radio" id="radio" name="radio" value="3" />
            <label for="3">3</label>
            <br />
            <br />


            <label>Sexo:</label>
            <input type="checkbox" id="checkbox1" name="checkbox" value="checkbox1" />
            <label for="checkbox1">Hombre</label>

            <input type="checkbox" id="checkbox2" name="checkbox" value="checkbox2" />
            <label for="checkbox2">Mujer</label>
            <br />
            <br />

            <label for="Hobbies">Hobbies</label>
            <select id="Hobbies" name="Hobbies">
                <option value="option1">Futbol</option>
                <option value="option2">Tenis</option>
                <option value="option3">Baloncesto</option>
            </select>
            <br />
            <br />

            <label for="message">Mensaje:</label>
            <br />

            <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
            <br />

            <label for="datetime">Fecha y hora:</label>
            <input type="datetime-local" id="datetime" name="datetime" />

            <label for="month">Mes:</label>
            <input type="month" id="month" name="month" />

            <label for="week">Semana:</label>
            <input type="week" id="week" name="week" />

            <label for="range">Rango:</label>
            <input type="range" id="range" name="range" min="0" max="100" />

            <label for="number">Número:</label>
            <input type="number" id="number" name="number" />

            <label for="search">Buscar:</label>
            <input type="search" id="search" name="search" />

            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" />

            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" />

            <label for="url">URL:</label>
            <input type="url" id="url" name="url" />


            <label htmlFor="avatar">
                Selecciona un avatar para enviar al servidor
            </label>
            <input type="file" required name="avatar" accept="image/*" />
            <SubmitButton />
        </form>
    )
}

