export let BASE_URL = "https://64d6fae32a017531bc12e71b.mockapi.io/Phone"


export let renderPhoneList = (list) => {
    let contentHTML = "";
    list.forEach((phone) => {
      let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
        phone;
      let trPhone = /*html*/
        `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${type}</td>
            <td>${price.toLocaleString()}</td>
            <td>${screen}</td>
            <td>${backCamera}</td>
            <td>${frontCamera}</td>
            <td class="d-flex justify-content-center">
            <img onclick="moTa(${id})" src=${img} alt="" style="height: 50%;width: 50%; cursor: pointer;">
            </td>
            <td>
            <button onclick="editPhone(${id})" class="btn btn-info">Sửa</button>
            <button onclick="deletePhone(${id})" class="btn btn-danger">Xóa</button>
            </td>
        </tr>
          `;
      contentHTML += trPhone;
    });
    document.getElementById("products-table").innerHTML = contentHTML;
  };


export let fetchPhone = () => {
    axios({
      url: BASE_URL,
      method: "GET",
    })
      .then((res) => {
        console.log(res)
        renderPhoneList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export let message = (message,isSuccess = true) => {
    Toastify({
        text: message,
        style: {
          background: isSuccess?"linear-gradient(to right, #00b09b, #96c93d)":"red",
        }
        }).showToast();
}

  export let getDataForm = () => {
    let id = document.getElementById("phoneId").value;
    let name = document.getElementById("phoneName").value;
    let price = document.getElementById("phonePrice").value;
    let screen = document.getElementById("phoneScr").value;
    let backCamera = document.getElementById("phoneBcam").value;
    let frontCamera = document.getElementById("phoneFcam").value;
    let img = document.getElementById("phoneImg").value;
    let desc = document.getElementById("phoneDesc").value;
    let type = document.getElementById("phoneType").value;
    return {id, name, price, screen, backCamera, frontCamera, img, desc, type}
  }

  export let showDataForm = (data) => {
    let {id, name, price, screen, backCamera, frontCamera, img, desc, type} = data
    document.getElementById("phoneId").value = id
    document.getElementById("phoneName").value = name
    document.getElementById("phonePrice").value = price
    document.getElementById("phoneScr").value = screen
    document.getElementById("phoneBcam").value = backCamera
    document.getElementById("phoneFcam").value = frontCamera
    document.getElementById("phoneImg").value = img
    document.getElementById("phoneDesc").value = desc
    document.getElementById("phoneType").value = type
  }

  export let clearForm = () => {
    document.getElementById("phoneId").value = ``
    document.getElementById("phoneName").value = ``
    document.getElementById("phonePrice").value = ``
    document.getElementById("phoneScr").value = ``
    document.getElementById("phoneBcam").value = ``
    document.getElementById("phoneFcam").value = ``
    document.getElementById("phoneImg").value = ``
    document.getElementById("phoneDesc").value = ``
    document.getElementById("phoneType").value = `Chọn loại sản phẩm`
  }