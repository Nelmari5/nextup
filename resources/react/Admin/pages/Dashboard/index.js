
import React from 'react';

import { Template } from '../../components';

const Home = () => {

    // Declare Visuals
    return (
        <Template>
            <div className="row">

                <div className="container">
                    <div className="col-md-12">
                        <div className="dashboardDetails">
                            <div className="col-xs-12 col-sm-12 col-md-8">
                                <div className="card spacing_card">
                                    <div className="row">
                                        <div className="col-md-6 border_right">
                                            <div className="dashBoardProfile">
                                                <div>
                                                    <img src="admin/assets/profile/profile-icon-01.png" />
                                                    <h3>Grower - Jack</h3>
                                                </div>
                                                <div>
                                                    <a className="top_up_btn"><button>top up your basket</button></a>
                                                        <div className="row">
                                                            <div className="basket_details">
                                                                <div className="basket_details_content">
                                                                    <h1>30</h1>
                                                                    <p>Your Basket</p>
                                                                </div>
                                                                <div className="basketIcon">
                                                                    <i className="fa fa-shopping-basket"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="table_content">
                                                <table>
                                                    <thead>
                                                        <tr className="table_content_th">
                                                            <th className="table_head_border_left">Orchard Options</th>
                                                            <th></th>
                                                            <th className="table_head_border_right">Seeds</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr className="table_content_td">
                                                            <td>Arhat</td>
                                                            <td>- $ 3btc</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr className="table_content_td">
                                                            <td>Bilimbi</td>
                                                            <td>- $ 6btc</td>
                                                            <td>4</td>
                                                        </tr>
                                                        <tr className="table_content_td">
                                                            <td>Che</td>
                                                            <td>- $ 12btc</td>
                                                            <td>4</td>
                                                        </tr>
                                                        <tr className="table_content_td">
                                                            <td>Doubah</td>
                                                            <td>- $ 24btc</td>
                                                            <td>1</td>
                                                        </tr>
                                                        <tr className="table_content_td">
                                                            <td>Etrog</td>
                                                            <td>- $ 48btc</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr className="table_content_td">
                                                            <td>Feijoa</td>
                                                            <td>- $ 96btc</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr className="table_content_td">
                                                            <td>Galia</td>
                                                            <td>- $ 192btc</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr className="table_content_td table_content_tr">
                                                            <td>Huito</td>
                                                            <td>- $ 384btc</td>
                                                            <td>0</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="card spacing_card">

                                    <div className="side_deets">
                                        <div className="card green_card">
                                            <h1>204</h1>
                                            <p>Growers</p>
                                        </div>
                                        <div className="card blue_card">
                                            <h1>70</h1>
                                            <p>Gropers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Template>
    )
}
export default Home