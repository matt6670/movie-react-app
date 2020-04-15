import React from 'react';

const Navbar = (props) => {
    return(
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">My IMDB</a>
                </div>
                {/* <ul class="nav navbar-nav">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                </ul> */}
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <form action="/search?source=hp" method="post" id="search-form" class="form-inline">
            
                        {/* <div class="form-group">
                            <select name="cat" class="form-control" id="cat">
                            <option value="movie">Movie Title</option>
                            <option value="person">Actor</option>
                            </select>
                        </div>
                            
                            <input type="text" id="movie" placeholder="Search" name="movieSearch" />
            
            
                        <input type="submit" class="btn btn-primary" /> */}
                        </form>
                    </li>      
                </ul>
                </div>
             </nav>
        </div>
       
    )
}

export default Navbar;