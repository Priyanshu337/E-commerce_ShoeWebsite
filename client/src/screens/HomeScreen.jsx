import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoes } from "../actions/ShoesAction";         // For bringing data from shoesAction.js to here to use
import Shoe from '../Components/Shoe';
import getAllShoesReducer from '../state/reducers/ShoesReducer';


export default function HomeScreen() {
  const dispach = useDispatch();
  const shoeState = useSelector((state) => state.getAllShoesReducer());

  const { shoes, error, loading } = shoeState;

  useEffect(() => {
    dispach(getAllShoes())
  });

  return (
    <div>
      <div className="row">
        {
          loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Something Went Wrong</h1>
          ) : (
            shoes.map(shoe => {
              return <div className="col-md-4" key={shoe._id}>
                <div >
                  <Shoe shoe={shoe} />
                </div>
              </div>
            }))}
      </div>
    </div>
  )
}
