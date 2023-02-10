import React from 'react'

function Admin() {
  return (
    <>
    
      {/* <!-- form --> */}
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-12 col-md-12 mt-4">
               <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">telephone</th>
                        <th scope="col">city</th>
                        <th scope="col">country</th>
                        <th scope="col">bio</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>youssef</th>
                        <td>test@live.fr</td>
                        <td>ADMIN</td>
                        <td>56666666</td>
                        <td>tunisia</td>
                        <td>tunisia</td>
                        <td>im full stack developer</td>
                        <td><button className="btn btn-outline-danger">Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   </>

  )
}

export default Admin