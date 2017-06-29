/**
 * Created by stasMaslow on 6/28/17.
 */
import React, {Component} from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>
                    Contacts
                </h1>
                <section>
                    <h3>Lets work together</h3>
                    <form action="https://formspree.io/stanislav.maslow@gmail.com" method="POST">
                        <div className="contact-info-group">
                        <label>
                            <span>Your Name</span>
                            <input type="text" name="name"/>
                        </label>

                        <label>
                            <span>Your Email</span>
                            <input type="email" name="_replyto"/>
                        </label>
                        </div>
                        <label>
                            <span>Tell me about your project</span>
                            <textarea name="message" cols="20" rows="2"></textarea>
                        </label>
                        <input type="submit" value="Send"/>
                    </form>
                </section>
            </div>
        );
    }
}

export default Contacts;
