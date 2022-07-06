import React from 'react'
import UserType from './UserList'

type UserProps = {
    user : UserType
}

export default function User ({user} : UserProps) : React.ReactElement {
    const {name, age, position } = user

    return (
        <>
            <p>이름 : {name} </p>
            <p>나이 : {age} </p>
            <p>포지션 : {position} </p>
        </>
    )
}