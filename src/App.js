import React from 'react';

function App() {
  return <div className="container">
    
  {/* <!-- Title --> */}
  <div className="title text-center"><h2>Todos</h2></div>
  
  {/* <!-- Add task --> */}
  <div className="add-task card" >
      {/* <!-- div 1 --> */}
      <div className=" card-header"><span className="fs-5"> Add a task</span></div>
      {/* <!-- div 2 --> */}
      <div className="card-body">

          <label for="Item" className="form-label">Add Item</label>
          <input type="text" className="form-control" id="Item" placeholder="what do you want to do?"/>
          <div className="form-text">Add what you wish to do.</div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </div>
  </div>
  {/* <!--  --> */}
  <div className="add-task card mt-5" >
      {/* <!-- div 1 --> */}
      <div className=" card-header"><span className="fs-5"> Tasks</span></div>
      {/* <!-- div 2 --> */}
      <div className="card-body">
          <div className="row row-cols-3 my-3" >
              <div className="col-6">
                  <span>Buy Benz</span>
                </div>
                <div className="col-3">
                  <span>Not Completed</span>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Complete</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
            
          </div>
          {/* <!-- 1 --> */}
          <div className="row row-cols-3 my-3" >
              <div className="col-6">
                  <span>Buy Benz</span>
                </div>
                <div className="col-3">
                  <span>Not Completed</span>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Complete</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
            
          </div>
          {/* <!--  --> */}
          <div className="row row-cols-3 my-3" >
              <div className="col-6">
                  <span>Buy Benz</span>
                </div>
                <div className="col-3">
                  <span>Not Completed</span>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Complete</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
            
          </div>
          {/* <!--  --> */}
          <div className="row row-cols-3 my-3" >
              <div className="col-6">
                  <span>make more money</span>
                </div>
                <div className="col-3">
                  <span>Not Completed</span>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Complete</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
                
            
          </div>
          {/* <!--  --> */}
          <div className="row row-cols-3 my-3" >
              <div className="col-6">
                  <span>Buy Dollars</span>
                </div>
                <div className="col-3">
                  <span>Not Completed</span>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Complete</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
            
          </div>
      </div>
  </div></div>;
}

export default App;
