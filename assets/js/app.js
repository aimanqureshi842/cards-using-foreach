var cl=console.log;
cl(postsArr);

let cardscontainer=document.getElementById("cardscontainer");

var cardsHTML='';

postsArr.forEach(function(posts){

    cardsHTML+=`       <div class="col-md-4 mb-4 ">
        <div class="card h-100 mt-4  ">
            <div class="card-header bg-dark text-white ">
                <h3 class="m-0  text-capitalize">${posts.title}</h3>
            </div>
            <div class="card-body">
                <p class="m-0">
                ${posts.body}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <button class="btn btn-sm btn btn-outline text-capitalize">edit</button>
                <button class="btn btn-sm btn btn-outline text-capitalize">remove</button>

            </div>
        </div>
       </div> 
`


})

cardscontainer.innerHTML=cardsHTML;






