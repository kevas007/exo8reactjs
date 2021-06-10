import React, { Component } from 'react';
import tart from '../images/toast.jpg'
import '../css/article.css'
class Article extends Component {
    nombreArticle = 2;
    render() {
        return (
            <div className="art">
                <div className="image">
                    <img src={tart} className="img-fluid" alt="" />
                </div>
                <div className="text">
                <button onClick={() => this.props.giveNombreArticle(this.nombreArticle)}>Quel est le titre</button>
                    <h1>Mon premier article</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea qui exercitationem, rem nam quos cum pariatur fuga atque deleniti delectus autem dicta libero officia adipisci? Earum quidem quasi, placeat adipisci porro eum, totam beatae maiores quos blanditiis optio, reiciendis pariatur commodi tenetur molestias accusantium voluptatum qui molestiae corrupti aliquid exercitationem!
                    </p>
                </div>
            </div>
        );
    }
}

export default Article;