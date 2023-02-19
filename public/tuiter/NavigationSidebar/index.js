/* eslint-env jquery */
const NavigationSidebar = (highlight) => {
    // $('#wd-navigationSiderbar').append(`
    console.log(highlight === 'Home');
    return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     
     <a class="list-group-item ${highlight === 'Home' ? 'active' : ''}" href="/">
          <i class="fa fa-home align-middle mt-1}"> </i>
          <span class="align-middle ms-2 d-none d-xl-inline-block">Home</span>
     </a>
     
      <a class="list-group-item ${highlight === 'Explore' ? 'active' : ''}" href="/">
           <i class="fa fa-hashtag align-middle"></i>
           <span class="align-middle d-none ms-2 d-none d-xl-inline-block">Explore</span>
     </a>
     
      <a class="list-group-item" href="/">
         <div class="input-group">
            <i class="fa fa-bell align-middle mt-1"> </i>
            <span class="align-middle ms-2 d-none d-xl-inline-block">Notifications</span>
         </div>
     </a>
     
      <a class="list-group-item" href="/">
          <i class="fa fa-envelope align-middle mt-1 ${highlight === 'Messages' ? 'active' : ''}"> </i>
          <span class="align-middle ms-2 d-none d-xl-inline-block">Messages</span>
     </a>
     
      <a class="list-group-item" href="/">
         <i class="fa fa-bookmark align-middle mt-0 ${highlight === 'Bookmarks' ? 'active' : ''}"> </i>
         <span class="align-middle ms-2 d-none d-xl-inline-block">Bookmarks</span>
     </a>
     
      <a class="list-group-item" href="/">
        <i class="fa fa-list align-middle mt-0 ${highlight === 'Lists' ? 'active' : ''}"> </i>
        <span class="align-middle ms-2 d-none d-xl-inline-block">Lists</span>
     </a> 
     
     <a class="list-group-item" href="/">
          <i class="fa fa-user align-middle mt-0 ${highlight === 'Profile' ? 'active' : ''}"> </i>
          <span class="align-middle ms-2 d-none d-xl-inline-block">Profile</span>
     </a>
     
      <a class="list-group-item" href="/">
          <i class="fa fa-ellipsis-h align-middle mt-0 ${highlight === 'More' ? 'active' : ''}"> </i>
          <span class="align-middle ms-2 d-none d-xl-inline-block">More</span>
     </a>
     
   </div>
   <div class="d-grid mt-2">
     <a href="tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;
// $(NavigationSidebar);
