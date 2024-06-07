import header from "./header";

function contactPage() {
    header();

    const content = document.querySelector("#content");
    const contactInfoBox = document.createElement('div');
    contactInfoBox.id = 'contact-info-box';
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Reach out.';
    contactHeader.id = 'contact-header';
    content.appendChild(contactInfoBox);
    contactInfoBox.appendChild(contactHeader);

    const email = document.createElement('h4');
    email.textContent = 'samwillrobinson@gmail.com';
    contactInfoBox.appendChild(email);

    const phone = document.createElement('h4');
    phone.textContent = '828-989-1290';
    contactInfoBox.appendChild(phone);


}

export default contactPage;