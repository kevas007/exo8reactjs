import React, { Component } from 'react';
import Article from './Article'
class Body extends Component {
    nombreArticles = (nbrarticle) => {
        console.log(nbrarticle)
    };
    
    render() {
        return (
            <div className="dob">
                <Article titre="les tartines" giveNombreArticle={(x) => this.nombreArticles(x)}/>
                <Article titre="CodingSchool" giveNombreArticle={(x) => this.nombreArticles(x)}/>
            </div>
        );
    }
}

export default Body;