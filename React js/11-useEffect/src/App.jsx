import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(100)
    function onChangingA() {
        console.log('A is Changing');
    }
    function onChangingB() {
        console.log('B is Changing');
    }
    useEffect(() => {
        onChangingA()
    }, [a])
    useEffect(() => {
        onChangingB()
    }, [b])
    return (
        <div>
            <div class='num'>
                <h1>num A {a}</h1>
                <h1>num B {b}</h1>
            </div>
            <button onClick={() => {
                setA(a + 1)
            }}>
                Change A</button>

            <button onClick={() => {
                setB(b + 10)
            }}
            >Change B</button>
        </div>
    )
}

export default App
