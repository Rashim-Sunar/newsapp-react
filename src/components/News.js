import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'

export class News extends Component {
    constructor(){
        super();
        this.state={            //setting state inside constructor
            articles : [],
            loading : false,
            page : 1
        }
    }

     async componentDidMount(){                 //componentDidMdount is always executed only after render
        let url=`https://newsapi.org/v2/everything?q=sports&from=2023-12-20&sortBy=publishedAt&apiKey=38756c3463f84422b9e5a053383311ac&page=1&pageSize=${this.props.pageSize}`//pageSize specifies how many items to show in a page
        this.setState({loading :true})
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({articles : parseddata.articles, totalResults : parseddata.totalResults, loading : false});    
        }

        handlePreviousClick=async()=>{
            let url=`https://newsapi.org/v2/everything?q=sports&from=2023-12-20&sortBy=publishedAt&apiKey=38756c3463f84422b9e5a053383311ac&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true})
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                page : this.state.page-1,
                articles : parseddata.articles,
                loading : false
            });
        }

        handleNextCLick=async()=>{
                let url=`https://newsapi.org/v2/everything?q=sports&from=2023-12-20&sortBy=publishedAt&apiKey=38756c3463f84422b9e5a053383311ac&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                this.setState({loading : true})
                let data = await fetch(url);
                let parseddata = await data.json();  
                this.setState({
                    page : this.state.page +1,
                    articles : parseddata.articles,
                    loading : false
                });
            }

  render() {
    return (
        <div className="container my-3">
            <h1 className="text-center">NewsApp - Top News</h1>
            {this.state.loading && <Loading/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 mb-3" key={element.url} >              
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,80):" "} imageUrl={element.urlToImage?element.urlToImage:"https://media.zenfs.com/en/ktla_articles_362/5ecb0820e4e59977a39d6d2fa0eb4a22"} newsUrl={element.url}/>
            </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}><b>&larr;</b>Previous</button>
                <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextCLick}>Next<b>&rarr;</b></button>
          </div>
        </div>

    )
  }
}

export default News
