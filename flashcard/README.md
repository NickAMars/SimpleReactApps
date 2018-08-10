

<!--
gives the height and the width of the component when it mounts
 componentDidMount(){
     window.addEventListener('resize', this.sizeUpdate);
     console.log(document.documentElement.clientWidth);
     console.log(document.documentElement.clientHeight);
 }
 sizeUpdate(){
   console.log(document.documentElement.clientWidth);
 } -->

So react has its own media queries so we can hide element
with the screen width

 Use for media query with the following library

npm install react-responsive --save
Documents here: https://www.npmjs.com/package/react-responsive

did with an example in Stack form when screen reaches a height of 650px




npm i react-test-renderer enzyme --save-dev

alternative
shallow renderer - when we just want to test the individual component without the store or other component


<!--
npm run test -- --coverage


First error came across while working with redux for testing

  mount- not going to work (shallow render is use instead)
  Throws error saying could not find "store"

  find.debug() - allows you to see the component render
  flash.find('Link').props()-
  allows you to see all the properties of the link tag
   console.log(flash.find('Link').props());
   -->

 <!-- Use in stack form
  console.log(stackForm.debug());
.first() === .at()
console.log(stackForm.state());
 stackform.setState({ cards: [] }); --updates state
 console.log(card.find('h4').at(1).hasClass('text-hidden'));


Testing reducer

 /*
 reducer({}, {})
 1.   @param default state
 2.   @param action object
 */
  -->
