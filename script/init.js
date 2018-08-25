// init.js --- This is where you apply your OCD.
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
var blogcfg={};
var forkme=function(repo_url)
{
    blogcfg.fork_repo_url=repo_url;
};
var comment_box=function(pageId,owner,repo)
{
    blogcfg.comment_page_id = pageId;
    blogcfg.comment_owner = owner;
    blogcfg.comment_repo = repo;
};
// init.js ends here
