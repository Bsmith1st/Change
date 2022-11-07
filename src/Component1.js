import React from 'react'
import pics from './ASSETS FOLDER/illustration-hero (1).svg'
import Component2 from './Component2';
import Component3 from './Component3';
import background from './ASSETS FOLDER/pattern-background-desktop (1).svg'


function Component1() {
    return (
        <section className='main-con'>

            <div className='c-o1'>
                
                    <img className='pics'  src={pics} alt="" />
                

                    <div>
                        <h1>Order Summary</h1>
                        <p> You can now listen to millions of songs, <br /> audiobooks,and podcast on any device <br /> anywhere you like!</p>

                    </div>
                    <Component2></Component2>
                    <Component3></Component3>
                    <div className='me' style={{ backgroundImage: `url(${background})` }} >

                    </div>
            </div>
        </section>

    )
}

export default Component1