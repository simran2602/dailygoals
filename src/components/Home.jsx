import React from 'react'
// import './'

const Home = () => {
    return (
        <div className='container'>

            <h1>Daily Goals</h1>
            <form>
                <input type='text' placeholder='Title'/>
                <textarea placeholder='Description'></textarea>
                <button type = "submit">Add</button>
            </form>
        </div>
    )
}

export default Home