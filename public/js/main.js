(function ($) {
    "use strict";

    // Sidebar Toggler 
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

})(jQuery);

const account = document.querySelector('.display-logout-btn');
const logout = document.querySelector('.Logout');
account.addEventListener('click', () => {
    logout.classList.toggle('active');
})


const activenav = document.querySelectorAll('.nav-link');
if (window.location.pathname == '/dashboard-arrived') {
    activenav[0].classList.add('active');
    activenav[1].classList.remove('active');
} else if (window.location.pathname == '/dashboard-done') {
    activenav[1].classList.add('active');
    activenav[0].classList.remove('active');
}

if (window.location.pathname == '/dashboard-arrived') {
    document.getElementById('send-of-order').addEventListener('click', async el => {
        const idTransfer = $('#send-item')[0].innerText;

        const postData = await axios({
            method: "POST",
            url: "/api/v1/product/design/changeDestination",
            data: {
                idTransfer
            }
        })
        if(postData.data.status === "success"){
            window.location.reload();
        }
    })
}

deletefunc = async () => {
    // live delete the element using element.delete

    const deleteDataDbId = document.getElementById('dbID').innerText;
    const postData = await axios({
        method: "DELETE",
        url: "/api/v1/product/design/deleteRequestTshirt",
        data: {
            deleteDataDbId
        }
    })
    if (postData.data.status === 'success') {

    } else {
        alert('unable to delete the cart item');
    }
    console.log(postData);
}