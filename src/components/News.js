import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={            //setting state inside constructor
            articles : [],
            loading : false
        }
    }

     async componentDidMount(){                 //componentDidMdount is always executed only after render
        let url="https://newsapi.org/v2/everything?q=sports&from=2023-12-20&sortBy=publishedAt&apiKey=38756c3463f84422b9e5a053383311ac"
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({articles : parseddata.articles});
        }

  render() {
    return (
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4 mb-3" key={element.url} >              
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,80):" "} imageUrl={element.urlToImage?element.urlToImage:"https://media.zenfs.com/en/ktla_articles_362/5ecb0820e4e59977a39d6d2fa0eb4a22"} newsUrl={element.url}/>
            </div>
            })}
          </div>
        </div>

    )
  }
}

export default News
