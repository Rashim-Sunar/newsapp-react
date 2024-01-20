import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Chris Low",
            "title": "Alabama players 'not running from change,' eager for DeBoer era - ESPN",
            "description": "With transfer news swirling around Alabama's football program ever since Nick Saban's retirement, several key players who've decided to stay told ESPN there was no panic within the group, only optimism for what comes next under new coach Kalen DeBoer.",
            "url": "https://www.espn.com/college-football/story/_/id/39331740/alabama-players-not-running-change-eager-kalen-deboer-era",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0118%2Fr1278861_1296x729_16%2D9.jpg",
            "publishedAt": "2024-01-18T01:09:00Z",
            "content": "With transfer news swirling around Alabama's football program ever since Nick Saban's retirement, several key players who've decided to stay told ESPN on Wednesday there was no panic within the footb… [+6544 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Ken Tran",
            "title": "These Republicans want to punish conservative rebels as tensions erupt in the House",
            "description": "“To use a football analogy, they want to throw a hail mary pass on every play. You don’t win ball games that way.”",
            "url": "https://www.usatoday.com/story/news/politics/2024/01/17/house-gop-conservative-max-miller-bob-good-freedom-caucus/72261822007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/17/USAT/72261869007-ap-congress-budget.jpg?crop=5999,3375,x0,y312&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-01-18T00:48:54+00:00",
            "content": "WASHINGTON A push to punish a handful of the most conservative lawmakers in the House reignited in a closed-door meeting on Wednesday, with some Republicans lashing out over their colleagues' continu… [+4637 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "Unique Stats from the 2023 College Football Regular Season",
            "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
            "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
            "publishedAt": "2023-12-12T12:00:00Z",
            "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "161385360554578",
            "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
            "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
            "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-06T09:06:42Z",
            "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Josh Fordham",
            "title": "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
            "description": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
            "url": "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-05T17:57:19Z",
            "content": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    constructor(){
        super();
        this.state={            //setting state inside constructor
            articles : this.articles,
            loading : false
        }
    }

  render() {
    return (
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4 mb-3" key={element.url} >              
                <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}
          </div>
        </div>

    )
  }
}

export default News
