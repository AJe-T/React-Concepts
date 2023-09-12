import './App.css';
import MyCard from "./Components/MyCard"
import Navbar from './Components/NavBar';
function App() {
  return (
    <>
    <Navbar color={"bg-danger"}/>
    <div className="container mt-3 ">
                <div className="row">
                    <div className="col-sm-3">
                      <MyCard Name="Japan" imgUrl="https://images.unsplash.com/photo-1579525108311-0c5730b5799d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW4lMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
                    </div>
                    <div className="col-sm-3">
                      <MyCard Name="singapore" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhb3gh7OzNhaG94MjgAlL0WHoEe41V62OBDmzNe2J&s"/>
                    </div>
                    <div className="col-sm-3">
                      <MyCard Name="Canada" imgUrl="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/Stanley-Park-e1567324833962.jpg"/>
                    </div>
                    <div className="col-sm-3">
                      <MyCard Name="India" imgUrl="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww&w=1000&q=80"/>
                    </div>
                </div>
            </div>
    </>
  );
}

export default App;
