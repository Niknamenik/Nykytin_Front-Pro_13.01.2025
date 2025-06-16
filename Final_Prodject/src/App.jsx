import { useDispatch } from "react-redux";
import Login from "./pages/Login";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const productsFromLS = JSON.parse(localStorage.getItem("products"));
  if (productsFromLS) {
    dispatch(setProducts(productsFromLS));
  } else {
    // useEffect(() => {
    //   async const req =()=>{
    //     try{
    //       await axios.get("https://http://localhost:3000/Table_Products")
    //     }
    //   }
    //     .then((response) => response.json())
    //     .then((json) => {
    //       localStorage.setItem("users", JSON.stringify(json));
    //       dispatch(setUsers(json));
    //     });
    // }, []);
  }
  return (
    <>
      <Login />
    </>
  );
}

export default App;
