// Navbar elements selection

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// Removing Password Suggestion for "Full Name"

document.getElementById("full_name").type = "text";

// Email Processing

function sendMail() {
    
    (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init("HpYVUxt17XHdDw9a7");
    })();
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    
    const serviceID = "service_hmi4iah";
    const templateID = "template_vwboa5c";
    
    emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("number").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message was sent successfully")
    },
    (err) => {console.log(err);},
    )};