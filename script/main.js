function disable_form() {
    const disabled = document.querySelectorAll('.disabled');
    for (i = 0; i < disabled.length; i++ ) {
        disabled[i].setAttribute('disabled', true);
    }

}

function selectVendor() {
    const value = input.value;

    for (i = 0; i < vendors.length; i++) {
    if ( value == vendors[i]) {
        return -1;
    }}

    const container = document.getElementById("vendor");
    let div = document.createElement('div');
    div.setAttribute("class", 'vendor-name d-flex align-items-center mb-3');
    container.appendChild(div);

    let img = document.createElement("img");
    let para = document.createElement("p");
    img.setAttribute("src", "../icon/eva_list-fill.svg")
    img.setAttribute("alt", "toogle")
    para.setAttribute("class","fw-bold font-size-xs")
    para.textContent = value
    
    div.appendChild(img);
    div.appendChild(para)
    vendors.push(value)
    console.log("final", vendors)   
}


function validate()
{
var selectedValue = input.options[input.selectedIndex].value;
var vendor_button = document.getElementById("vendor_button");
    if (selectedValue == "choose")
    {
        console.log("please select")
        vendor_button.style.display = "none";
    }
    else {
        vendor_button.style.display = "block";
        var book = document.getElementById("book");
        book.addEventListener('click', function() {
            selectVendor();
    
    }
);

    }
}

/* Profile page */
window.onload = disable_form();



const input = document.getElementById("vendors");
const cancel = document.querySelector("#vendor_button .cancel");
vendors = [];
num_vendors = 0;
if (input != null){
    input.addEventListener('click', function() {
        validate()
        console.log("first event")
        }
    );
}


if (cancel != null) {
    cancel.addEventListener('click', function() {
        const del = document.querySelector(".vendor-name:last-child");
    
        // remove the last item
        del.parentElement.removeChild(del);
        vendors.pop()
        console.log(vendors)
    })
}


const profileDropdown = document.querySelector('.dropdown-toggle', ':after');
var show = true;
profileDropdown.addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.marginTop = "-5em";
    show = false; 
    console.log(show)
})

function dropdown(event) {
    const navbar = document.querySelector('.navbar');
    navbar.style.marginTop = "0"
    console.log(show)
}

