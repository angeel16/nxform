'use server'

import fs from 'node:fs'

export async function handle(formData) {
    const nombre = formData.get('nombre')
    const apellidos = formData.get('apellidos')
    const avatar = formData.get('avatar')
    const password = formData.get('password')
    const radio = formData.get('radio')
    const checkbox = formData.get('checkbox')
    const datetime = formData.get('datetime')
    const month = formData.get('month')
    const range = formData.get('range')
    const number = formData.get('number')
    const search = formData.get('search')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const url = formData.get('url')



    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.log(nombre, apellidos, avatar, password, radio, checkbox, datetime, month, range, number, search, phone, email, url)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        return { type: 'success', message: 'Datos guardados' }
    } catch (error) {
        return { type: 'error', message: error.message }
    }

}
