import { BASE_URL, clearForm, fetchPhone, getDataForm, renderPhoneList, showDataForm } from "./controller.js";
import { message, valid } from "./validate.js";

fetchPhone()

window.addPhone = () => {
    let data = getDataForm()
    let isValid = valid(data)
    if (!isValid) return message("Vui lòng điền thông tin",false);
    axios.post(BASE_URL,data)
    .then((res) => {
            console.log(res);
            fetchPhone()
            message("Thêm thành công")
            $("#exampleModal").modal("hide")
          })
          .catch((err) => {
           message("Đã có lỗi xảy ra",false);
          });
}

window.deletePhone = (id) => {
    console.log(id);
    axios.delete(`${BASE_URL}/${id}`)
    .then((res) => {
            console.log(res);
            fetchPhone()
            message("Xóa thành công")
          })
          .catch((err) => {
           message("Đã có lỗi xảy ra",false);
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
           message("Đã có lỗi xảy ra",false);
          });
}

window.updatePhone = () => {
    console.log("yes");
    let data = getDataForm()
    axios.put(`${BASE_URL}/${data.id}`,data)
    .then((res) => {
            console.log(res);
            let isValid = valid(data)
            if (!isValid) return message("Vui lòng điền thông tin",false);
            fetchPhone()
            message("Cập nhật thành công")
            $("#exampleModal").modal("hide")
            clearForm()
            document.getElementById("phoneId").readOnly = false
            document.getElementById("add-phone").disabled  = false
          })
          .catch((err) => {
           message("Đã có lỗi xảy ra",false);
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
          message("Đã có lỗi xảy ra",false);
        });
}

