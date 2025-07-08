export const setupSearchPopup = () => {

    const allProducts = [
        {
            id: 1,
            name: "Titan Crest 1.43” AMOLED Smart Watch with BT Calling...",
            img: "https://m.media-amazon.com/images/I/719RiDAGXtL._SX522_.jpg",
            details: "https://www.amazon.in/Titan-Resolution-Functional-SingleSync-WatchfacesIP68/dp/B0CLRCTC58/ref=sr_1_4?crid=2WK8WJCUY9AU9&dib=eyJ2IjoiMSJ9.9Ks3-xdILGcvIdD7x0SJgvY9xsOJmzTFW33yNP_T__YGw1SQeh1V99sB4vQ33GfD7OdDiGDOZocA_2icBJwJKAfL8TplfEx4TaEykU95KXqDe1Zl0qbjx5dDcZWPyOa0hsMwe-oYRaYjnLH4stAfKQxaiKAHJM6v8suLjk6P2QpncCQzuOFoXXU_zYz9THU1wcImC5aquq29reOuPNmyGSTuZJjPonbl1E-ZVOCppS8.9WF-f6qUn6A15pCAl0oCqKMSM70vY2syWTv5cFkJ9Dg&dib_tag=se&keywords=latest+smartwatch+for+men&qid=1751891997&sprefix=latest+smartw%2Caps%2C428&sr=8-4",
            tags: ["smartwatch", "fitness", "wearables"]
        },
        {
            id: 2,
            name: "Apple iPhone 13 (128GB)",
            img: "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg",
            details: "https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=1PHKEIOHK8P2C&dib=eyJ2IjoiMSJ9.JfgPQikktSSL4sEadVAlJ4KmonxfBpj1Vkg0r_sqcdaGAeMljF1zjqXxp9MgFs95oMGhE08xQXhWt6coUTXSVbEezk9HpW6InYlZv6qpKST5LpF9W9zgUmq74-di7VpAMnPL8C4BE4nf8bSaGmzBrjIZteeQNyBY28afc_Vpxa2bLPu8FP7nnekJm8C5RstLfaaiQaudAR-7wybMdlbVTVTQNSL4dQO5qdketi9lk9E.iNhvdTCetj6ebqpT1SLJ11TiccZFsZoVmU1RF8TZnp4&dib_tag=se&keywords=iphone&qid=1751896096&sprefix=iphone%2Caps%2C401&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            tags: ["Apple", "Iphone", "Smartphone", "Phone"]                    
        },
        {
            id: 3,
            name: "boAt Rockerz 450, 15 HRS Battery...",
            img: "https://m.media-amazon.com/images/I/31ztpzzaDSL._SX300_SY300_QL70_FMwebp_.jpg",
            details: "https://www.amazon.in/Rockerz-450-Wireless-Bluetooth-Headphone/dp/B07PR1CL3S/ref=sr_1_3?crid=21VA6FLYV8YQ&dib=eyJ2IjoiMSJ9.HpWI2eB2JTDRxFQ8P0ttliOLPkxywx0JYeFja-FJ8mYEcXpapjoo0n885p2pU6jSQ8jnXql2UYTe2yx5m3snzyrin-thIXH-JI9wDbqXKVillGk75aakuZiFO9N0Sb87mlDdf5YAYvKVFWOCcJUyLouhUc1ePTf4E0mrH-hqlvzyiJWp4OvHFyuqIXFrqOsb_RF6mR-PcDHybKzB44nfhSHen69hptixgcNXPmuIEfk.jzRgxChgKGigazqzyQHLoRmhKpoRu1UNmeudrsIy-2Y&dib_tag=se&keywords=headphones&qid=1751896459&sprefix=headphone%2Caps%2C1099&sr=8-3&th=1",
            tags: ["Headphones", "boat", "wireless", "headset", "music"]                    
        },
        {
            id: 4,
            name: "Portronics Beem 440 Smart LED Projector...",
            img: "https://m.media-amazon.com/images/I/31lYlI1JNlL._SX300_SY300_QL70_FMwebp_.jpg",
            details: "https://www.amazon.in/Portronics-Projector-Resolution-Rotatable-Streaming/dp/B0CQG7XMXC/ref=sr_1_13?crid=3IWGTX2DIK55Y&dib=eyJ2IjoiMSJ9.PekAG130X_CMqORKMj9-0zQUuQRf7JWKS8iE_Z4tWSzz_aUiy7jue0LFH31X5MukUXrqpx3DCyagvR9sYnucYMKRGKENqlcWrtV0Fsyao2SoonbgIQQlZxRPvS-xZUeF5B8WRVdPga5vuUeZ_bMQdWy0ZAuanZ6_7eG_VKqhOi00ZPadtNbpaBm8Lpfsir4jPFxzV_WmeR1Q3Hrbcsb0il9p-DuXYmQJIJOEHoe6w__EcbpFGi7viHsTFtFl9ObcJb3v-hXOp12_EZixGvfIVClNB2FenlxmsztVaLfiCus.Z62UojxgMjLFIwBCcydFuuTGk1SOuHiPFYg3qT80UZs&dib_tag=se&keywords=electronics&qid=1751896650&sprefix=electronics%2Caps%2C355&sr=8-13&th=1",
            tags: ["projector", "3d", "gadget", "Latest"]                    
        },
        {
            id: 5,
            name: "MSI Thin 15, Intel Core i5-13420H...",
            img: "https://m.media-amazon.com/images/I/71U142wuLrL._AC_UY218_.jpg",
            details: "https://www.amazon.in/MSI-i5-13420H-Windows-GeForce-B13VE-1802IN/dp/B0CV9R92TQ/ref=sr_1_15?crid=37MMSJCAJS6QS&dib=eyJ2IjoiMSJ9.AlytHyoF9nu5VT6E882L_Q3b01B9gsUgw1TFbVNlB3_uULqGtUqNWvINsj75yYjNI9sIE4_r0cROnJZOJ5V-zf36VW0NcruK9z66a5Q8h79vus5t5MsPl3mrPAhzZ5W-zFkpZ0-6ArFuJXdDjY4T4WmgYutE-r5uZyleJiMKM82DyzMr6QnNlWjPM6bQebn2wRy4qdUNDe4MJyoGLZTm856Gjo45ViVJj7A72PM_J_w.7dV4QSuOEr7_dtSIlQfY15lIO6YKl5ekkwMCo8dQ2C4&dib_tag=se&keywords=msi+18h&qid=1751896789&sprefix=msi+18h%2Caps%2C368&sr=8-15",
            tags: ["laptop", "gaming laptop", "gaming", "pc", "msi"]                    
        },
    ]

  const searchInput = document.getElementById('search');

  // Create popup container dynamically
  const searchPopup = document.createElement('div');
  searchPopup.id = 'searchPopup';
  searchPopup.className = 'search-results';
  searchInput.insertAdjacentElement('afterend', searchPopup);

  // Input listener
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    searchPopup.innerHTML = '';

    if (!query) {
      searchPopup.style.display = 'none';
      return;
    }

    // Filter results
    const matches = allProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
    );

    if (matches.length === 0) {
      searchPopup.style.display = 'none';
      return;
    }

    // Build popup content
    matches.forEach(product => {
      if (!product.details) return;

      const link = document.createElement('a');
      link.className = 'search-card';
      link.href = product.details;

      const img = document.createElement('img');
      img.src = product.img;
      img.alt = product.name;

      const title = document.createElement('h3');
      title.textContent = product.name;

      link.appendChild(img);
      link.appendChild(title);
      searchPopup.appendChild(link);
    });

    searchPopup.style.display = 'block';
  });

  // Optional: hide popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchPopup.contains(e.target) && e.target !== searchInput) {
      searchPopup.style.display = 'none';
    }
  });
};
