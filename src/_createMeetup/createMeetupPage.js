import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class createMeetup extends Component {
    render(){
        return(
            <div className="col-md-6 col-md-offset-3 ml-auto mr-auto">
                <br />
                    <h2><center>Create Meetup</center></h2>
                    <br />
                    <form>
                    <div class="form-group">
                        <label for="exampleInputText">Username</label>
                        <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Enter Username" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputDate">Date Time Meetup</label>
                        <input type="date" class="form-control" id="exampleInputDate" placeholder="Date Time" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary"><Link to="/" className="text-white">Submit</Link></button>
                </form>
            </div>
        )
    }
}

export default createMeetup;