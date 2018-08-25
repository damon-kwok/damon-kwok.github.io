// render.js --- This is where you apply your OCD.
//
// Copyright (C) 2018 Damon Kwok
//
// Author: damon <damon-kwok@outlook.com>
// Date: 2018-08-25
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
//Code:
'use strict';

if(blogcfg.fork_repo_url!=undefined)
{
    document.getElementById("forkongithub").style.display="inline";
    document.getElementById("fork_link").href=blogcfg.fork_repo_url;
}

if(blogcfg.comment_page_id!=undefined)
{
    var gitment = new Gitment(
        {
            id: blogcfg.comment_page_id,
            owner: blogcfg.comment_owner,
            repo: blogcfg.comment_repo,
            oauth: {
                client_id: 'a9fe69dfa6b5f560747b',
                client_secret: '0d9b030bd291aeeb9b3fb5f4e79902e1fb71506c',
            },
        }
    );
    //const container =document.createElement('div');
    //container.id="div-gitment";
    //document.body.appendChild(container);
    gitment.render('div-gitment');
}

// render.js ends here
