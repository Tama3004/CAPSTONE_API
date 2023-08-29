import { BASE_URL, fetchPhone, getDataForm, renderPhoneList, showDataForm } from "./controller.js";

fetchPhone()

window.addPhone = () => {
    let data = getDataForm()
    axios.post(BASE_URL,data)
    .then((res) => {
            console.log(res);
            fetchPhone()
          })
          .catch((err) => {
           console.log(err);
          });
}

window.deletePhone = (id) => {
    console.log(id);
    axios.delete(`${BASE_URL}/${id}`)
    .then((res) => {
            console.log(res);
            fetchPhone()
          })
          .catch((err) => {
           console.log(err);
          });
}

window.editPhone = (id) => {
    $("#exampleModal").modal("show")
    console.log(id);
    document.getElementById("phoneId").readOnly = true
    document.getElementById("add-phone").disabled  = true
    axios.get(`${BASE_URL}/${id}`)
    .then((res) => {
            console.log(res);
            showDataForm(res.data)
          })
          .catch((err) => {
           console.log(err);
          });
}

window.updatePhone = () => {
    console.log("yes");
    let data = getDataForm()
    axios.put(`${BASE_URL}/${data.id}`,data)
    .then((res) => {
            console.log(res);
            fetchPhone()
            $("#exampleModal").modal("hide")
            document.getElementById("phoneId").readOnly = false
            document.getElementById("add-phone").disabled  = false
          })
          .catch((err) => {
           console.log(err);
          });
}

var searchList = [];
window.searchPhone = () => {
    var searchData = document.getElementById("searchName").value;
    axios({
        url: BASE_URL,
        method: "GET",
      })
        .then((res) => {
          let data = res.data
          for (var i = 0; i < data.length; i++) {
            if (data[i].name.trim()==searchData) {
                searchList.push(data[i])
            }
            renderPhoneList(searchList)
        }
        })
        .catch((err) => {
          console.log(err);
        });
}

