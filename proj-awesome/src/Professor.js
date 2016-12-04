import React from 'react';
import './Professor.css';
import {Media} from 'react-bootstrap'
//import {Alert} from 'react-bootstrap';


var SAMPLE = {
  name:'Joel Ross', 
  rating:10, 
  tag:['Nice', 'responsible', 'AMAZING LECTURES','aaa'],
  descrip: "Professor in the iSchool at University of Washington",
  comment: ["He's one of the most vibrant teachers I've ever had. I never actually write reviews of teachers, but his sheer admiration towards his students makes me want to rave about him. Even though he teaches in a class of 200-300, he makes sure that everyone is engaged and comfortable. Everyone should have a class at least once with this man! He is just WOW", "Great lecturer, and engaging assignments. Made me become much more interested in informatics. Papers aren't graded that hard, but he encourages you to write them well. Midterm and final also aren't that bad."],
  img:'http://faculty.washington.edu/joelross/images/joel_ross.jpg',
  website: 'https://ischool.uw.edu/people/faculty/joelross'
};

class Professor extends React.Component {
  constructor(props){
    super(props);

    //this ideally would be set up from a Controller
    this.state = {prof: SAMPLE};
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Professor</h1>
         <Info />
         <Tag />
         <Comment />
       
      </div>
    );
  }
}

//  <div className="info">
//         <h2>{this.state.prof.name}</h2>
//         <img src={this.state.prof.img} alt={this.state.prof.name} />
//         <div>{this.state.prof.descrip}</div>
//         <div><a href={this.state.prof.website}>Website</a></div>
//       </div>

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <img src={SAMPLE.img} alt={SAMPLE.name} />
        <h2>{SAMPLE.name}</h2>
        <div>{SAMPLE.descrip}</div>
        <span><a href={SAMPLE.website}>Website</a></span>
        <div>Overall Rating: {SAMPLE.rating}</div>
      </div>
    );
  }  
}

class Tag extends React.Component {
  render() {
    var theListOfTag = SAMPLE.tag;
    console.log(theListOfTag);
    var tagArray = theListOfTag.map(function(tagStr){
      return <span className="label label-primary" key={tagStr}>{tagStr.toUpperCase()}</span>;
    })

    return (
      <div className="tag">
        <p>Tags</p>
          {tagArray}
      </div>
    );
  }  
}

class Comment extends React.Component {
  render() {
    var theListOfComment = SAMPLE.comment;
    console.log(theListOfComment);
    var commentArray = theListOfComment.map(function(commentStr){
      return <div className="well" key={commentStr}>
               <Media>
                  <Media.Left align="top" className="comment-left">
                    <img height={64} width={64} src="http://www.firstgiving.com/imaging/stock/336a509b-567f-4524-80b8-94557dea3b47.jpg" alt="pic" />
                    <div>Easiness: 8/10</div>
                    <div>Overall Rating: 9/10</div>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>UserName</Media.Heading>
                    {commentStr}
                  </Media.Body>
                </Media>
              </div>
               
    })

    return (
      <div className="tag jumbotron">
        <p>Comments</p>
          {commentArray}
      </div>
    );
  }  
}


// class BreedList extends React.Component {
//   render() {

//     //for now
//     var theListOfBreeds = this.props.breeds;

//     var breedItemsArray = theListOfBreeds.map(function(breedStr){
//       return <li key={breedStr}><a>{breedStr}</a></li>;
//     })
//     //["Hound", "Mix", "Husky"]
//     // => [<li><a>Hound</a></li>, ...]

//     return (
//       <nav>
//         <h2>Pick a Breed</h2>
//         <ul className="list-unstyled">
//           {breedItemsArray}
//         </ul>            
//       </nav>      
//     );
//   }  
// }

// class AboutLinks extends React.Component {
//   render() {
//     return (
//       null
//     );
//   }  
// }

// class DogAdoptions extends React.Component {
//   render() {
//     //want to have a prop called "dogs"
//     var dogCardsArray = this.props.dogs.map(function(dogObj){
//       return <DogCard dog={dogObj} key={dogObj.name} />
//     });

//     return (
//       <div>
//         <h2>Dogs for Adoption</h2>
//         <div className="cards-container">
//           {dogCardsArray}
//         </div>
//       </div>
//     );
//   }  
// }

// class DogCard extends React.Component {
//   constructor(props){
//     super(props);

//     //`this` refers to this new card

//     //this.name = this.name.toUpperCase();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log('You clicked on', this.props.dog.name);
//   }

//   render() {

//     //want a variable this.props.dog

//     return (
//         <div className="card" onClick={this.handleClick}>
//           <div className="content">
//             <img src={this.props.dog.img} alt={this.props.dog.name} />
//             <h3>{this.props.dog.name}</h3>
//             <p>{this.props.dog.sex} {this.props.dog.breed}</p>
//           </div>
//         </div>
//     );
//   }  
// }


/*
  <App>
    <Navigation>
      <BreedList>
      <AboutLinks>
    </Navigation
    <DogAdoptions>
      <DogCard>
      <DogCard>
      <DogCard>
      ...
    </DogAdoptions>
  </App>
*/




export default Professor;