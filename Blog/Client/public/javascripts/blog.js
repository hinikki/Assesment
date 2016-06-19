var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

// Blog container
var BlogContainer = React.createClass({
  render : function(){
    return(
      <div className ="container" id = "main">
      <Navbar />
      <main>
      {this.props.children}
      </main>
      </div>
    );
  }
});

// Navigation bar
var Navbar = React.createClass({
  render: function(){
    return(
      <div className ="container-fluid">
      <nav class="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Space Blogs</a>
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <div className="collapse navbar-collapse navHeaderCollapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#/home">Home</a></li>
              <li><a href="#/blog">Blogs</a></li>
              <li><a href="#/addpost">Add Post</a></li>
              <li><a href="#/about">AboutUs</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
});

// Home component
var Home = React.createClass({
    render : function(){
    return(
  <div className ="home">
  <div id="head" className="parallax" parallax-speed="2">
  <h1 id="logo" className="text-center">
  </h1>
  </div>

      <main id="main">
      <div className="container">



        <div className="row section featured topspace">
    			<h2 className="section-title"><span>Space Research Blogs</span></h2>
    			<div className="row">

          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
<p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
<p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
<p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. Thats how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
<p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
<h2 className="section-heading">The Final Frontier</h2>
<p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
<p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
<blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>
<p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
<h2 className="section-heading">Reaching for the Stars</h2>
<p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
<span className="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>
<p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
<p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>


          </div>

    			</div>
    		</div>
      </div>
      </main>
<Footer/>
  </div>
    );
  }
});

// Blog component
var Blog =React.createClass({

  getInitialState: function () {
    return {
      blogJSONArray: []
    };
  },

  loadBlog: function(){
    $.get('/api/blog', function (result) {

    this.setState({
      blogJSONArray: result
      });
    }.bind(this));
  },

  componentDidMount: function () {
    this.loadBlog();
    //setInterval(this.loadBlog, 6000);
  },

  render: function () {
    return(
      <div className="container" id="mainBox">
      <div id="head" className="parallax" parallax-speed="2">
      <h1 id="logo" className="text-center">
      </h1>
      </div>
        <MainBox jsonData = {this.state.blogJSONArray} />
        <Footer/>
      </div>
    );
  }
});

var MainBox = React.createClass({
  readPostByID: function () {

  },

  render: function () {
    var postrows = [];
    this.props.jsonData.forEach(function (post){
       postrows.push(<BlogPost key={post._id} postObj={post} onReadPost={this.readPostByID} />);
     }.bind(this));

    return(<div>{postrows}</div>);
  }
});

var BlogPost = React.createClass({
  getInitialState: function () {
    var postObj = this.props.postObj;
    return postObj;
  },

  render: function(){
      return(
        <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="post-preview">

                        <h2 className="post-title">
                            {this.props.postObj.title}
                        </h2>
                        <h4 className="post-subtitle">
                          {this.props.postObj.topic}
                        </h4>
<p>{this.props.postObj.text}</p>
                    <p className="post-meta">Posted by <a href="#">{this.props.postObj.author_name}</a> on {this.props.postObj.date}</p>
                </div>
                <hr></hr>
                </div>
                </div>
                </div>
      );
    }
});

    //AboutUs
    var AboutUs=React.createClass({
      render:function(){
        return(<div>
          <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti enim modi! Et.</p>
            </div>
        </div>
    </div>
    <Footer/></div>
        );
      }
    });
//footer component

var Footer=React.createClass({
  render:function(){
    return(<div>
      <footer id="footer" className="topspace">
      	<div className="container">
      		<div className="row">
      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Contact</h3>
      				<div className="widget-body">
      					<p>+234 23 9873237<br/>
      						<a href="mailto:#">some.email@somewhere.com</a><br/>
      						<br/>
      						#7A, Castle City, CN 37015
      					</p>
      				</div>
      			</div>

      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Follow me</h3>
      				<div className="widget-body">
      					<p className="follow-me-icons">
      						<a href=""><img src="images/facebook.jpeg" /></a>
      						<a href=""><img src="images/twitter.jpeg" /></a>
      						<a href=""><img src="images/google.jpeg" /></a>

      					</p>
      				</div>
      			</div>

      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Text widget</h3>
      				<div className="widget-body">
      					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
      					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
      				</div>
      			</div>

      			<div className="col-md-3 widget">
      				<h3 className="widget-title">Form widget</h3>
      				<div className="widget-body">
      					<p>+234 23 9873237<br/>
      						<a href="mailto:#">some.email@somewhere.com</a><br/>
      						<br/>
      						#7A, Castle City, CN 37015
      					</p>
      				</div>
      			</div>

      		</div>
      	</div>
      </footer>
      </div>
    );
  }
});
//Adding a post

var AddPost=React.createClass({
  componentDidMount: function(){
    $('#addPostButton').on('click', function () {

      $.ajax({
        type: 'POST',
        url: 'api/blog/add',
        data: $('#addForm').serialize() + '&addPoster=' + $('#addPoster').val().split('\\')[2],
        cache: false,
        success: function () {
          alert("Your Post has been Added");


        }
      })
    });
  },

  render: function () {
    return(
      <div className="container">

        <div className="row" id="addPostBox">
          <div className="col-md-3 pull-left"></div>
      		<div className="col-md-6 jumbotron">
      			<form role="form" id="addForm">
              <div className="form-group">

                <label for="addTitle">
                  Title
                </label><br/>
                <input type="text" className="form-control" id="addTitle" name="addTitle" required />

              </div>
              <div className="form-group">

      					<label for="addTopic">
      						Topic
      					</label>
      					<input type="text" className="form-control" id="addTopic" name="addTopic" required />

      				</div>
              <div className="form-group">

      					<label for="addText">
      						Details
      					</label>
      					<textarea type="text" className="form-control" id="addPlot" name="addText" required />

      				</div>
      				<div className="form-group">

                <label for="addAuthor">
                  Author
                </label>
                <input type="text" className="form-control" id="addAuthor" name="addAuthor" required />

      				</div>
              // <div className="form-group">

              //   <label for="addPoster">
              //     Upload Poster
              //   </label>
              //   <input type="file" className="form-control" id="addPoster" name="addPoster" required />
              //
      				// </div>
      			</form>
            <center>
            <button className="btn btn-primary" id="addPostButton">
              Add New Post
            </button>
            </center>
      		</div>
          <div className="col-md-3"></div>
      	</div>
        <Footer/>
      </div>

    );
  }

});




// Main Route
var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
(
<Router history = {browserHistory}>
    <Route path="/" component={BlogContainer}>
    <IndexRoute component = {Home} />
      <Route path="/home" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/addpost" component={AddPost} />
      <Route path="/about" component={AboutUs} />
      </Route>
  </Router>
),
document.getElementById('content')
);
