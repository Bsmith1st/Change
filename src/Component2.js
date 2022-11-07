import React, { useState } from 'react'
import logo from './ASSETS FOLDER/icon-music (1).svg'


function Component2() {
    const [plan, setYourPlan] = useState(
        {
            year: 'Annual Plan ',
            Amount: '$9.99',
        },
    )
    function changePlan() {
        if (plan.year === 'Annual Plan' && plan.Amount === '$9.99/year') {
            setYourPlan({ year: 'Monthly Plan', Amount: '$2/month' })
        } else {
            setYourPlan({ year: 'Annual Plan', Amount: '$9.99/year' })
        }

    }

    return (
        <div className='c-o2' >

            <img src={logo} alt="" />
            <div className='price'>

                <strong > {plan.year} </strong>
                <p> {plan.Amount} </p>

            </div>
            <span className='change' onClick={changePlan} style={{ color: 'blue', fontSize: '18px' }}  >   Change   </span>

        </div>
    )
}

export default Component2