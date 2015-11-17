import React from 'react';

var projects = [
	{
	  name: 'project1',
	  index: 1,
	  title: 'Project1',
	  titleImage: '',
	  listImage: '',
	  description: 'Project 1\'s description',
	  link: {
	    repository: 'https://github.com/project1'
	  }
	},
	{
	  name: 'project2',
	  index: 2,
	  title: 'Project2',
	  titleImage: '',
	  listImage: '',
	  description: 'Project 2\'s description',
	  link: {
	    repository: 'https://github.com/project2'
	  }
	},
	{
	  name: 'project3',
	  index: 3,
	  title: 'Project3',
	  titleImage: '',
	  listImage: '',
	  description: 'Project 3\'s description',
	  link: {
	    repository: 'https://github.com/project3'
	  }
	}
];

projects.forEach(function(project) {
	project.component = React.createClass({
	  render() {
	    return (
	      <article className={project.name + ' wrapper project'}>
	        <header><h1>{project.description}</h1></header>
	        <section><p>Some project content and things</p></section>
	        <footer><div className="links"><a href={project.link.repository}>Link</a></div></footer>
	      </article>
	    );
	  }
	});
});

export default projects;
