import React from 'react'
import Data from './DummyData'

const TopPlaces = () => {
    const displayCards = () => {
        return Data.map((obj) => {
            return <div className="col-md-4 mb-3">
                <div className="card ">
                    <img src={obj.image} alt="" className='card-img-top card-img' />
                    <div className="card-body">
                        <h3 className='fw-bold'>{obj.name}</h3>
                        <h5 className=''>{obj.description}</h5>
                    </div>
                </div>

            </div>

        })
    }
    return (
        <div className='container'>
            <h2 className='d-flex justify-content-center fw-bold mb-3'>TOP PLACES</h2>
            <div className="row">
                {displayCards()}
            </div>
        </div>
    )
}

export default TopPlaces