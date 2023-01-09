import React, { useState } from 'react'

export default function Accordion({ question, answer, id }) {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="acco" >
                <h5 className='pls' onClick={() => {
                    setShow(!show)
                }}>{show ? "✅" : "⛔"}</h5>

                <h4>{(id)}.  {question}</h4>
                <div className="ans"> {show && <p>{answer}</p>}</div>

            </div>
        </>
    )
}
