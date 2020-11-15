import React, { Component } from 'react'
export default class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "a",
            firstName: "a",
            lastName: "a",
            email: "a",
            phone: "a",
            message: "a",
            contactName: "a",
            taskList: [{ index: Math.random, statement:"", url: ""}],
        };
    }

    addNewRow = (event) => {
        this.setState((prevState) => ({
                taskList: [...prevState.taskList, { index: Math.random, projectName: "", task: "", taskNotes: "", taskStatus: ""}],
        }));
    }
    deleteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        })
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    handleEdition = (event) => {
        this.setState ( { firstName: event.target.value })
     }
     handleSubEdition = (event) => {
        this.setState ( { lastName: event.target.value })
     }
     handleVersion = (event) => {
        this.setState ( { email: event.target.value })
     }
     handleMaker = (event) => {
        this.setState ( { phone: event.target.value })
     }
     handleMessage = (event) => {
        this.setState ( { message: event.target.value })
     }
     handleSubmit = (event) => {
        alert("Thank you for the Feedback !")
        fetch('/test/persistContact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contactName: this.state.firstName + this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message
            })
})

    }
    render(){
        return(
            <div>
                <div className="pb-sm-5">
                <section className="bg-light">
                 <div className="container">
                         <form id="contact-form" method="post">
                            <div class="messages"></div>
                            <div class="controls">
                            <h2 class="h1-responsive font-weight-bold text-center my-4">Form</h2>
                            <p class="text-center w-responsive mx-auto mb-5">Fill the form to save software</p>


                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_edition">Edition *</label>
                                            <input id="form_edition" type="text" name="name" class="form-control" placeholder="Please enter software name *" required="required" data-error="Edition is required." onChange={this.handleEdition} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_subedition">Edition Subtype</label>
                                            <input id="form_subedition" type="text" name="surname" class="form-control" placeholder="Please enter Edition subtype" required="required" data-error="sub edition is required." onChange={this.handleSubEdition} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_version">version *</label>
                                            <input id="form_version" type="text" name="version" class="form-control" placeholder="Please enter your version *" required="required" data-error="version is required." onChange={this.handleVersion} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Software type" className="col-sm-2 control-label">Software Type</label>
                                            <select type="softwareType" className="form-control" id="softwareType" name="softwareType" placeholder="software type" >
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="system">System</option>
                                                <option value="application">Application</option>
                                                <option value="programming">Programming</option>
                                                <option value="gamming">Gamming</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_maker">Maker</label>
                                            <input id="form_maker" type="tel" name="make" class="form-control" placeholder="Please enter Maker" onChange={this.handleMaker} />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">Lisence</label>
                                            <select type="lisence" className="form-control" id="lisence" name="lisence" placeholder="lisence">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_about">About *</label>
                                            <textarea id="form_about" name="about" class="form-control" placeholder="About software *" rows="4" required="required" data-error="Please,describe software." onChange={this.handleAbout} ></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">RAM</label>
                                            <select type="lisence" className="form-control" id="lisence" name="lisence" onChange={this.handleCity} placeholder="ram">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="2">2</option>
                                                <option value="4">4</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">Hard disk</label>
                                            <select type="lisence" className="form-control" id="lisence" name="lisence" onChange={this.handleCity} placeholder="hard disk">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="500">500</option>
                                                <option value="1000">1000</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">Graphics</label>
                                            <select type="lisence" className="form-control" id="lisence" name="lisence" onChange={this.handleCity} placeholder="Graphics">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">Bit</label>
                                            <select type="lisence" className="form-control" id="lisence" name="lisence" onChange={this.handleCity} placeholder="bit">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="32">32</option>
                                                <option value="64">64</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                <div className="col-md-6">
                                        <div class="form-group">
                                        <label for="Lisence" className="col-sm-2 control-label">Operating system</label>
                                            <select type="lisence" className="form-control" id="lisence" name="lisence" onChange={this.handleCity} placeholder="Operating system">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="windows">Windows</option>
                                                <option value="linux">Linux</option>
                                            </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="Lisence" className="col-sm-2 control-label">Required system</label>
                                                <select type="lisence" className="form-control" id="lisence" name="lisence" onChange={this.handleCity} placeholder= "System required ">
                                                    <option value="" disabled selected>Choose your option</option>
                                                    <option value="laptop">Laptop</option>
                                                    <option value="desktop">Desktop</option>
                                                </select> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >statement</th>
                                                <th className="required" >step url</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.taskList.map((val, idx) => (
                                        <tr key={val.index}>
                                                <td>
                                                    <textarea id="form_version" name="statement" data-id={idx} id={this.state.statement} class="form-control" placeholder="Please enter step"/>
                                                </td>
                                                <td>
                                                    <input id="form_version" type="text" name="url" data-id={idx} id={this.state.url} class="form-control" placeholder="Please enter url"/>
                                                </td>
                                                <td>
                                                    {
                                                    idx===0?<button onClick={()=>this.state.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                    : <button className="btn btn-danger" onClick={(() => this.clickOnDelete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                                                    }
                                                </td>
                                                </tr >

                                    ))}

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    </div>
                                    </div>
                                <div class="col-md-12">
                                        <a className="btn btn-success btn-send" href="/home" onClick={this.handleSubmit} role="button" >Submit</a>
                                    </div>
                                <div class="row">
                                    <div class="col-md-12">
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </section>
                    </div>
                    <footer className="footer fixed-bottom font-small bg-light">
                        <div className="panel panel-primary">
                        <div class="footer-copyright text-center py-3">© 2019 Copyright:
                        Easy Move
                        </div>
                        </div>
                    </footer>
                 </div>
        )
    }
}