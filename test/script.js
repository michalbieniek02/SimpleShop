document.addEventListener('DOMContentLoaded', function () {
    const pages = [
        { name: 'Products', content: [] },
        { name: 'About Us', content: 'About' }
        
    ];

    const products = [
        { name: 'OG Kush', price: 12.45, image: './assets/zaza/og-kush.jpeg' },
        { name: 'Sour Diesel', price: 18.75, image: './assets/zaza/sour-diesel.jpeg' },
        { name: 'Girl Scout Cookies', price: 21.30, image: './assets/zaza/cookies-automatic.jpeg' },
        { name: 'Blue Dream', price: 16.80, image: './assets/zaza/berry.jpeg' },
        { name: 'Green Crack', price: 14.25, image: './assets/zaza/green-punch.jpeg' },
        { name: 'White Widow', price: 20.10, image: './assets/zaza/white-widow.jpeg' },
        { name: 'Pineapple Express', price: 19.50, image: './assets/zaza/pineapple-kush.webp' },
        { name: 'AK-47', price: 23.15, image: './assets/zaza/ak-automatic.jpeg' },
        { name: 'Northern Lights', price: 11.90, image: './assets/zaza/northern-light.jpeg' },
        { name: 'Jack Herer', price: 17.60, image: './assets/zaza/jack-herer.jpeg' },
        { name: 'Bubba Kush', price: 22.80, image: './assets/zaza/buba-kush.jpeg' },
        { name: 'Purple Haze', price: 13.75, image: './assets/zaza/purple-cbd.jpeg' },
        { name: 'Super Silver Haze', price: 24.00, image: './assets/zaza/shining-silver-haze.jpeg' },
        { name: 'Gelato', price: 10.60, image: './assets/zaza/gelato-automatic.jpeg' },
        { name: 'Trainwreck', price: 18.20, image: './assets/zaza/trainwreck.jpeg' },
        { name: 'Chemdawg', price: 14.90, image: './assets/zaza/dog.jpeg' },
        { name: 'Bruce Banner', price: 21.80, image: './assets/zaza/hulkberry-automatic.jpeg' },
        { name: 'Granddaddy Purple', price: 20.25, image: './assets/zaza/granddaddy-purple.jpeg' },
        { name: 'Blueberry', price: 13.20, image: './assets/zaza/blueberry-automatic.jpeg' },
        { name: 'Lemon Haze', price: 18.90, image: './assets/zaza/lemonhaze.jpeg' }
    ];

    const cartList = [];

    pages[0].content = products;

    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');

    const title = document.createElement('img');
    title.src = './assets/blue_logo.jpg'

    const cart = document.createElement('img')
    cart.src = './assets/cart.png'
    cart.className="cart-icon"

    cart.addEventListener('click',function (){
        document.body.appendChild(sidebar)
        sidebar.style.visibility = "visible"
        updateCartDisplay()
    })

    let totalCartPrice = 0;
    function updateCartDisplay() {
        cartItems.innerHTML = '';
    
        cartList.forEach(item => {
            const cartItemRow = document.createElement('div');
            cartItemRow.className = "cart-row"
            cartItemRow.classList.add('cart-item-row');
    
            const itemName = document.createElement('span');
            itemName.textContent = item.name+ "\t-\t";
    
            const itemTotalPrice = document.createElement('span');
            let price = (item.price * item.quantity).toFixed(2)
            totalCartPrice+=Number(price);
            itemTotalPrice.textContent = price+"$";
    
            
            cartItemRow.appendChild(itemName);
            cartItemRow.appendChild(itemTotalPrice);
            
            cartItems.appendChild(cartItemRow);
        });
        const totalPrice = document.createElement('span')
        cartItems.appendChild(totalPrice)
        totalPrice.className = "total"
        totalPrice.innerText = "Total: "+totalCartPrice.toFixed(2)+"$"
    
        updateCartBadge();
    }
    
    
    const sidebar = document.createElement('div')
    const cartContent = document.createElement('div')
    const cartHeader = document.createElement('div')
    const cartItems = document.createElement('div')
    const cartActions = document.createElement('div')
    const image = document.createElement('img')
    image.src = './assets/black-cart.png'
    cartItems.innerText = cartList.forEach(element => {
        element.name + element.quantity + element.price
    });
    
    sidebar.className = 'sidecart'
    cartContent.className = 'cart-content'
    cartHeader.className = 'cart-header'
    cartItems.className = 'cart-items'
    cartActions.className = 'cart-actions' 
    
    image.addEventListener("click",function (){
        sidebar.style.visibility = "hidden"
    })
    
    sidebar.appendChild(cartContent)
    cartContent.appendChild(cartHeader)
    cartHeader.appendChild(image)
    cartContent.appendChild(cartItems)
    cartContent.appendChild(cartActions)
    
    
    
    pages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = page.name;
        a.href = '#';
        a.addEventListener('click', function () {
            updateContent(page.content);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    navbar.appendChild(title)
    navbar.appendChild(ul);
    ul.appendChild(cart)
    document.body.appendChild(navbar);

    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    document.body.appendChild(contentDiv);

    function createFooter() {
        const footer = document.createElement('div');
        footer.className = 'footer-container';
      
        const leftSection = document.createElement('div');
        leftSection.className = 'left-section';
      
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = "We appreciate your feedback bout our products and services! Stay stoned ";
        leftSection.appendChild(description);
      
        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';
      
        const emailSection = document.createElement('div');
        emailSection.className = 'contact-info-section';
      
        const emailHeading = document.createElement('h6');
        emailHeading.className = 'contact-heading';
        emailHeading.textContent = 'Email us at';
        emailSection.appendChild(emailHeading);
      
        const email = document.createElement('p');
        email.textContent = 'contact@weed.com';
        emailSection.appendChild(email);
      
        contactInfo.appendChild(emailSection);
      
        const phoneSection = document.createElement('div');
        phoneSection.className = 'contact-info-section';
      
        const phoneHeading = document.createElement('h6');
        phoneHeading.className = 'contact-heading';
        phoneHeading.textContent = 'Call us';
        phoneSection.appendChild(phoneHeading);
      
        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = '+48 696 969 696';
        phoneSection.appendChild(phoneNumber);
      
        contactInfo.appendChild(phoneSection);
      
        leftSection.appendChild(contactInfo);
        footer.appendChild(leftSection);
      
        const rightSection = document.createElement('div');
        rightSection.className = 'right-section';
      
        const heading = document.createElement('h1');
        heading.className = 'heading';
        heading.textContent = 'Let’s Roll!';
        rightSection.appendChild(heading);
      
        const paragraph = document.createElement('p');
        paragraph.className = 'paragraph';
        paragraph.textContent = 'We provide the best quality to numerous clients from all around the world and we do it with huge passion';
        rightSection.appendChild(paragraph);
      
        const socialIcons = document.createElement('div');
        socialIcons.className = 'social-icons';
      
        const fbIcon = document.createElement('img');
        fbIcon.src = './assets/footer/fb.png';
        socialIcons.appendChild(fbIcon);
      
        const xIcon = document.createElement('img');
        xIcon.src = './assets/footer/x.png';
        socialIcons.appendChild(xIcon);
      
        const igIcon = document.createElement('img');
        igIcon.src = './assets/footer/ig.png';
        socialIcons.appendChild(igIcon);
      
        const linkedinIcon = document.createElement('img');
        linkedinIcon.src = './assets/footer/linkd.png';
        socialIcons.appendChild(linkedinIcon);
      
        rightSection.appendChild(socialIcons);
        footer.appendChild(rightSection);
      
        return footer;
    }

    function createFooterMobile() {
        const footerMobile = document.createElement('div');
        footerMobile.className = 'footer-mobile';
        footerMobile.innerHTML = `
            <div className="footer-content">
                <h2 className="copyright">Copyright 2024</h2>
                <h2 className="template">Cali Zaza Shop &copy;</h2>
                
            </div>
        `;
        return footerMobile;
    }

    function checkWidth() {
        const footer = document.querySelector('.footer-container');
        const footerMobile = document.querySelector('.footer-mobile');
        if (window.innerWidth < 1240) {
            if (footer) footer.remove();
            if (!footerMobile) document.body.appendChild(createFooterMobile());
        } else {
            if (footerMobile) footerMobile.remove();
            if (!footer) document.body.appendChild(createFooter());
        }
    }

    checkWidth();

    window.addEventListener('resize', checkWidth);

    function updateContent(newContent) {
        contentDiv.innerHTML = '';

        if (Array.isArray(newContent)) {
            newContent.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card');

                const image = document.createElement('img');
                image.src = product.image;
                image.className = 'card-img';

                const name = document.createElement('h2');
                name.textContent = product.name;
                name.className = 'card-name';

                const price = document.createElement('p');
                price.textContent = '$' + product.price.toFixed(2);

                const plusButton = document.createElement('button')
                plusButton.innerHTML = '+' 
                plusButton.className = 'card-plus';
                plusButton.addEventListener('click', function () {
                    addToCart(product);
                });

                const minusButton = document.createElement('button') 
                minusButton.innerHTML = '-';
                minusButton.className = 'card-minus';
                minusButton.addEventListener('click', function () {
                    removeFromCart(product);
                });

                card.appendChild(name);
                card.appendChild(image);
                card.appendChild(price);
                card.appendChild(minusButton);
                card.appendChild(plusButton);

                contentDiv.appendChild(card);
            });
        } else {
            const div = document.createElement('div');
            div.innerHTML = newContent;
            contentDiv.appendChild(div);
        }
    }
    const badge = document.createElement('span');
    badge.className = 'cart-badge';
    ul.appendChild(badge);

    function updateCartBadge() {
        const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0);
        badge.textContent = totalItems > 0 ? totalItems : '';
    }

    function addToCart(product) {
        const existingCartItem = cartList.find(item => item.name === product.name);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cartList.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
        updateCartBadge()
        console.log('Cart:', cartList);
    }

    function removeFromCart(product) {
        const existingCartItemIndex = cartList.findIndex(item => item.name === product.name);
        if (existingCartItemIndex !== -1) {
            const existingCartItem = cartList[existingCartItemIndex];
            if (existingCartItem.quantity > 1) {
                existingCartItem.quantity--;
            } else {
                cartList.splice(existingCartItemIndex, 1);
            }
            updateCartBadge()
            console.log('Cart:', cartList);
        }
    }

    updateContent(pages[0].content);
});
