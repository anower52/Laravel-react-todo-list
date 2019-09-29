import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div>
                <form >
                    <div className="form-group">
                        <label for="category_name">Category name</label>
                        <input type="text" class="form-control" id="category_name" placeholder="category name" />
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        );
    }
}

