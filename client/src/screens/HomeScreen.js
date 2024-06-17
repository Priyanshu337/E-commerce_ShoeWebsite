import Shoe from '../Components/Shoe'
import shoes from '../Shoesdata'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllShoes from '../actions/ShoesAction';

export default function HomeScreen() {


  const dispach = useDispatch()

  useEffect(() => {
    dispach(getAllShoes())
  }, [])

  return (
    <div>
      <div className="row">
        {shoes.map(shoe => {

          return <div className="col-md-4">
            <div >
              <Shoe shoe={shoe} />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
