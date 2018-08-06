
gives the height and the width of the component when it mounts

<!--
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
