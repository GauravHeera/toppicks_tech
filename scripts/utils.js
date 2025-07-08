// utils.js
export const productCard = (product) => {
    const card = document.createElement('div');
    card.className = 'product_card';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'product_img';
    imgDiv.style.backgroundImage = `url(${product.img})`;

    const infoWrap = document.createElement('div');
    infoWrap.className = 'product_info_wrap';

    infoWrap.innerHTML = `
        <h3 class="product_name">${product.name}</h3>
        <p class="product_desc">${product.desc}</p>
        <span class="product_price">Starting ₹${product.price}</span>
        <div class="product_btn_wrap">
            <a href="${product.details}" target="_blank"><button class="product_btn know_more">Know More</button></a>
            <a href="${product.amazon}" target="_blank"><button class="product_btn amazon_btn">Amazon</button></a>
            <a href="${product.flipkart}" target="_blank"><button class="product_btn flipkart_btn">Flipkart</button></a>
            <a href="${product.croma}" target="_blank"><button class="product_btn croma_btn">Croma</button></a>
        </div>
    `;

    card.appendChild(imgDiv);
    card.appendChild(infoWrap);


    return card;
};

export const footerTxt = [
    {text: "Privacy Policy", path: "policies/privacy_policy.txt"},
    {text: "Terms Of Use", path: "policies/terms.txt"},
    {text: "Go back to top", path: "/"}
];

export const carouselSlide = [
    {
        img: "images/banner_phone.png",
        heading: "Flagship Smartphones",
        desc: "Experience cutting-edge innovation with our curated selection of flagship smartphones. From powerful processors and stunning displays to intelligent cameras and premium design, these devices represent the very best each brand has to offer.",
        btn: "https://www.bing.com/shop?q=flagship+smartphones&FORM=SHOPTB",
        btnClass: "slidetbn carousel_1_btn"
    },
    {
        img: "images/banner_watch.png",
        heading: "Luxury Smartwatches",
        desc: "Timeless elegance meets cutting-edge tech. This section features premium smartwatches that combine sophisticated design with advanced features—perfect for those who appreciate style as much as substance.",
        btn: "https://www.amazon.in/s?k=luxury+smartwatches&ref=nb_sb_noss",
        btnClass: "slidetbn carousel_2_btn"
    },
    {
        img: "images/banner_laptop.png",
        heading: "High Performance Laptops",
        desc: "Explore the ultimate in speed, power, and multitasking. This section brings together top-tier laptops built to handle demanding workflows, gaming, and creativity—all in one place.",
        btn: "https://www.bing.com/search?q=high%20performance%20laptops&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=croma&sc=20-5&sk=&cvid=25387FDE60C648D09DF90B8A85BB8724&ajf=70",
        btnClass: "slidetbn carousel_3_btn"
    },
    {
        img: "images/banner_headphone.png",
        heading: "Gaming Headphones",
        desc: "Level up your audio immersion with headphones built for competitive and cinematic gameplay. From surround sound accuracy to noise-isolating comfort, these picks deliver crisp dialogue, booming effects, and lag-free performance that keeps you focused in every battle.",
        btn: "https://www.bing.com/shop?q=gaming+headphones&FORM=SAMT01",
        btnClass: "slidebtn carousel_4_btn"
    }
]