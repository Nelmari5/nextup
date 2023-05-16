
import React, { useState, useEffect, Fragment } from 'react';

import { Template, Loading } from '../../components';

import { getLeaderboard } from './actions';

const LeaderboardList = () => {
  console.log(`LeaderboardList :: `);

  //Declare State
  const [id, setID] = useState("")
  const [page, setPage] = useState(1)
  const [leaderboard, setPoll] = useState([])
  const [order, setOrder] = useState("DESC")
  const [loading, setLoading] = useState(true)

  //Declare Effects
  useEffect(() => {
    (async () => {
      let { leaderboard } = await getLeaderboard({ page })
      console.log("Contents Page", { leaderboard })
      setPoll(leaderboard)
      // setPagination(pagination)
      setLoading(false)
    })()
  }, [ page ])

  //Declare Visuals
  const renderTable = () => {
    return (
      <Fragment>
        <div className="card">
          <div className="card-body p-0">
            <div className="box-container post-content">
              <div className="table">
                <table className="table table-striped">
                  <thead className="thead">
                    <tr>
                      <th className="table_head_border_left">Growers</th>
                      <th>Groppers</th>
                      <th className="table_head_border_right">Standings</th>
                    </tr>
                  </thead>

                  <tbody>
                  <Loading loading={loading}>
                    {leaderboard.map((leaderboard, i) =>
                      <tr key={i}>
                        <td>
                          {leaderboard.user_name}
                        </td>
                        <td>
                          {leaderboard.registered_group_id}
                        </td>
                        <td>
                          {leaderboard.standing}
                        </td>
                      </tr>
                    )}
                    </Loading>
                  </tbody>
                </table>
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
export default LeaderboardList
