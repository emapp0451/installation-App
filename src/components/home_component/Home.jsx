import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, img, Button} from 'react-bootstrap';
//import ban from 'assets/ban.jpg';
//import bhopal from 'assets/bhopal.jpg';
//import chennai from 'assets/chennai.jpg';
//import header from '/home/vikrant/Application/emApp/EmAppv1.3/react-bootstrap-emapp/src/assets/paragraphs.json';


export default class Home extends Component{
    state = {
        contacts: [],
        headers: []
      }

      componentDidMount() {
        fetch('/test/findallCity')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log);

        fetch('/test/findallHeader')
        .then(res => res.json())
        .then((data) => {
          this.setState({ headers: data })
        })
        .catch(console.log);
      }

    render(){
        return(
        <div>
          <div className="pb-sm-5">
            <section className="bg-light">
            <div className="container">
                <h4 className="text-primary">Aim of Easy Move:</h4>
                {this.state.headers.map((header, index) => (
                    <div>
                      <h5 key={index}>{header.headerId == 1 ? header.introduction : ""}</h5>
                    </div>
                ))}
                <br></br>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/software/systemSoftware"><img src={'https://drive.google.com/thumbnail?id=1ZJPKrC7pPU-gEknj6MMUQN5fiGGXJCdY'} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3> <a href="/software/systemSoftware" className="text-dark">Operating system</a></h3>
                      <h5>
                          Operating system is the syatem software this is the mandate software that is rquired for any computer to be functional.

                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/software/applicationSoftware"><img src={'https://drive.google.com/thumbnail?id=1H8u4qvhMG0RDPu4k9zfqfG3O0BDKJo4O'} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3> <a href="/software/applicationSoftware" className="text-dark">Application software</a></h3>
                        <h5>
                            These are the software which are for some specified function to be performed. for example to install any media palyer like VLC
                        </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="software/gammingSoftware"><img src={'https://drive.google.com/thumbnail?id=1Xf7uuhMlzQXVBxNLXwvdUbP7NLDc21xj'} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h3> <a href="software/gammingSoftware" className="text-dark">Gamming software</a></h3>
                        <h5>
                            These are the software for games like Pub-G
                        </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
          <footer className="footer fixed-bottom font-small bg-light">
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
              Easy Move
            </div>
          </footer>
    </div>
        )
    }
}