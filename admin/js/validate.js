export function kiemTraRong (idErr,value) {
    if (value.length == 0) {
        document.getElementById(idErr).innerText = `Không được để trống`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

export function kiemTraKLoai (idErr,value) {
    if(value == `Chọn loại sản phẩm`) {
        document.getElementById(idErr).innerText = `Vui lòng chọn`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}


export let valid = (data) => {
    let valid = 
    kiemTraRong("vali-id",data.id) &
    kiemTraRong("vali-name",data.name) &
    kiemTraKLoai("vali-type",data.type) &
    kiemTraRong("vali-price",data.price) &
    kiemTraRong("vali-scr",data.screen) &
    kiemTraRong("vali-bcam",data.backCamera) &
    kiemTraRong("vali-fcam",data.frontCamera) &
    kiemTraRong("vali-img",data.img)
    return valid
}