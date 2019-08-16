import React, { Component } from 'react'
import  {Route,Switch} from "react-router-dom";
import Home from "./component/Home/home";
import Layout from "./hoc/Layout/layout";

import NewsArticle from './component/Articles/News/Post/index';
import VideoArticle from './component/Articles/Videos/Video/index'
import NewsMain from './component/Articles/News/Main/index';
import VideosMain from './component/Articles/Videos/Main/index';


 class Routes extends Component {
    render() {
        return ( 
            <Layout>
                <Switch>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/news" exact component={NewsMain}/>
                   <Route path="/articles/:id" exact component={NewsArticle}/>
                   <Route path="/videos/:id" exact component={VideoArticle}/>
                   <Route path="/videos" exact component={VideosMain}/>

                </Switch>
            </Layout>
        )
    }
}
export default Routes;
