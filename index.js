let renderPhoneList = (list) => {
    let contentHTML = "";
    list.forEach((phone) => {
        let {id,name,price,screen,backCamera,frontCamera,img,desc,type} = phone;
        let phoneCard = /*html*/
        `
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card h-100">
                <div class="content-overlay"></div>
                <img src="${img}" alt="" />
                <div class="content-details">
                        <h3 class="pb-5 text-light text-center">ABOUT ITEM</h3>
                    <div class="d-flex justify-content-start py-1">
                        <span class="text-light"><b>Screen:</b> ${screen}</span>
                    </div>
                    <div class="d-flex justify-content-start py-1">
                        <span class="text-light"><b>Back Camera:</b> ${backCamera}</span>
                    </div>
                    <div class="d-flex justify-content-start py-1">
                        <span class="text-light"><b>Front Camera:</b> ${frontCamera}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">$${price}</h6>
                    <p class="card-text">${type}</p>
                    <p><b>Description:</b> ${desc}</p>
                    <button type="button" class="btn btn-block w-50" onclick="addToCart(${id})">Add to cart</button>
                </div>
            </div>
        </div>
        `
        contentHTML += phoneCard;
    })
    document.getElementById('listItem').innerHTML = contentHTML
}

let fetchPhone = () => {
    axios({
        url:'https://64d6fae32a017531bc12e71b.mockapi.io/Phone',
        method:"GET",
    })
    .then((res) => {
        console.log(res);
        renderPhoneList(res.data);
    })
    .catch((err) =>{
        console.log(err);
    })
}
fetchPhone();