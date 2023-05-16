import React, { Component, Fragment } from 'react';
import Pagination from 'react-bootstrap/Pagination';

class Paginator extends Component {
    constructor(props) {
        super(props);

        // Functions
        this.handleFirst = this.handleFirst.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleLast = this.handleLast.bind(this);
    };

    // OnClick Page Button Handlers
    handleFirst(){
        this.props.changePage(1);
    }
    handlePrev(page){
        this.props.changePage(page);
    }
    handlePage(page){
        this.props.changePage(page);
    }
    handleNext(page){
        this.props.changePage(page);
    }
    handleLast(page){
        this.props.changePage(page);
    }

    // Render Elements
    render () {
        // Create Array For Pages On the Pagination Number Line
        let arr = Array.apply(null, {length: this.props.pagination.pages}).map(Number.call, Number);
        
        // Create First Button Elements
        let FirstButton;
        let PrevButton;
        if(this.props.pagination.page == 1){
            FirstButton = <Pagination.First disabled/>
            PrevButton = <Pagination.Prev disabled/> 
        } else {
            FirstButton = <Pagination.First onClick={this.handleFirst}/>
            PrevButton = <Pagination.Prev onClick={()=> this.handlePrev(this.props.pagination.page - 1)}/>
        }
        
        // Create Last Button Elements
        let LastButton;
        let NextButton;
        if(this.props.pagination.page == this.props.pagination.pages){
            NextButton = <Pagination.Next disabled/>
            LastButton = <Pagination.Last disabled/>
        } else {
            NextButton = <Pagination.Next onClick={()=> this.handleNext(this.props.pagination.page + 1)}/>
            LastButton = <Pagination.Last onClick={()=> this.handleLast(this.props.pagination.pages)}/>
        }

        let start_show_page = (this.props.pagination.page - 3)
        let last_show_page = (this.props.pagination.page + 3)
        // Render Pagination
        return(
            <Pagination className="pagination">
                {FirstButton}
                {PrevButton}
                { arr.map((page, i) => {
                    page++;
                    if(page >= start_show_page && page <= last_show_page){
                        if(page == this.props.pagination.page){
                            return <Pagination.Item key={i} active onClick={()=> this.handlePage(page)}>{page}</Pagination.Item>
                        } else {
                            return <Pagination.Item key={i} onClick={()=> this.handlePage(page)}>{page}</Pagination.Item>
                        }
                    }
                })}
                {NextButton}
                {LastButton}
            </Pagination>
        )
    }

}

export default Paginator;