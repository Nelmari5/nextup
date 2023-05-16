
import React, { useState, useEffect, Fragment } from 'react';

import { Template } from '../../components';
import { getUser, update } from './actions';

const Profile = (props) => {

  //Declare Variables
  let { id } = props.match.params

  //Declare State
  const [email, setName] = useState("")
  const [password, setShortDescript] = useState("")
  const [loading, setLoading] = useState(true)

  //Declare Effects
  useEffect(() => {
    (async () => {
      let { email, password} = await getUser({ id })
      console.log("getCompetition ::", )
      setName(email)
      setShortDescript(password)
      setLoading(false)
    })()
  }, [id])

  //Declare Functions
  const handleName = (e) => setName(e.target.value)
  const handleShortDescript = (e) => setShortDescript(e.target.value)

  const submit = () => {
    let result = update({ id, password })
    if (!!result) {
      console.log("updateProfile ::", id)
      window.location = "/profile"
    }
  }

  //Declare Visuals
  const renderTable = () => {
    return (
      <Fragment>
        <div className="row">

          <div className="container">
            <div className="col-md-12">
              <div className="dashboardDetails">
                <div className="col-md-6">
                  <div className="card">
                        <div className="dashBoardProfile">
                          <div>
                            <img src="admin/assets/profile/profile-icon-01.png" />
                          </div>
                          <div>
                            <h4>Name here</h4>
                          </div>
                            <input type="text" className="form-control" placeholder="Email" value={email} onChange={handleName} />
                            <input type="email" name="confirm_email" className="form-control" placeholder="Confirm Email"/>
                            <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleShortDescript}/>
                            <input type="password" name="password" className="form-control" placeholder="Confirm Password"/>
                            <div className="col-12">
                              <button className="btn btn-success" onClick={submit}>Update Profile</button>
                            </div>
                        </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card profileAvatarCard">
                    <div>
                      <img src="admin/assets/profile/profile-icon-01.png" />
                      <img src="admin/assets/profile/profile-icon-02.png" />
                      <img src="admin/assets/profile/profile-icon-03.png" />
                      <img src="admin/assets/profile/profile-icon-04.png" />
                      <img src="admin/assets/profile/profile-icon-05.png" />
                      <img src="admin/assets/profile/profile-icon-06.png" />
                      <img src="admin/assets/profile/profile-icon-07.png" />
                      <img src="admin/assets/profile/profile-icon-08.png" />
                      <img src="admin/assets/profile/profile-icon-09.png" />
                      <img src="admin/assets/profile/profile-icon-010.png" />
                      <img src="admin/assets/profile/profile-icon-011.png" />
                      <img src="admin/assets/profile/profile-icon-012.png" />
                      <img src="admin/assets/profile/profile-icon-013.png" />
                      <img src="admin/assets/profile/profile-icon-014.png" />
                      <img src="admin/assets/profile/profile-icon-015.png" />
                      <img src="admin/assets/profile/profile-icon-016.png" />
                      <img src="admin/assets/profile/profile-icon-017.png" />
                    </div>
                  
                    <div className="uploadFile_heading">
                      <h2>Want to add your own avatar?</h2>

                      <div className="input-group">
                        {/* <img src="admin/assets/profile/upload.svg"/> */}
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"/>
                          <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <Template>
      <div className="row">
        <div className="col-md-12">
          {renderTable()}
        </div>
      </div>
    </Template>
  )
}
export default Profile